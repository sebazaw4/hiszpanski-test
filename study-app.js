(function () {
  const fallbackVocab = {
    topics: ["oficina", "emprender", "marketing", "ferias", "relaciones laborales", "eventos", "trayectoria", "tecnologia"],
    flashcards: [
      { topic: "oficina", es: "la oficina", pl: "biuro", example: "Trabajo en una oficina pequena pero moderna." },
      { topic: "oficina", es: "hacer un pedido", pl: "zlozyc zamowienie", example: "Voy a hacer un pedido de material de oficina." },
      { topic: "financiacion", es: "el prestamo", pl: "pozyczka", example: "Necesitamos solicitar un prestamo." },
      { topic: "marketing", es: "la campana publicitaria", pl: "kampania reklamowa", example: "Lanzamos una campana publicitaria online." },
      { topic: "tecnologia", es: "el teletrabajo", pl: "praca zdalna", example: "El teletrabajo ahorra tiempo." }
    ],
    quiz: [],
    oral: []
  };

  const fallbackGrammar = {
    rules: [
      {
        id: "subjuntivo",
        title: "Subjuntivo presente",
        short: "Uzywaj po woli, emocji, watpliwosci i przy nieznanym obiekcie.",
        examples: ["Busco una oficina que sea luminosa.", "Es importante que compruebes la informacion."]
      },
      {
        id: "condicional",
        title: "Condicional 2",
        short: "Si + imperfecto de subjuntivo, condicional.",
        examples: ["Si fuera tu, pediria una subvencion.", "Si tuviera dinero, invertiria en marketing."]
      }
    ],
    quiz: [
      { kind: "gramatyka", type: "choice", question: "Busco una oficina que ___ luminosa.", options: ["es", "sea", "esta"], answer: "sea", explain: "Szukasz nieznanej jeszcze biura, wiec subjuntivo." },
      { kind: "gramatyka", type: "gap", question: "Si yo ___ (ser) tu, hablaria con el jefe.", answer: "fuera", explain: "Condicional 2: si + imperfecto de subjuntivo." }
    ]
  };

  const vocab = window.VOCAB_DATA || fallbackVocab;
  const grammar = window.GRAMMAR_DATA || fallbackGrammar;
  const verbs = window.VERB_DATA || { verbs: [], drills: [] };
  const storeKey = "b1-study-app-progress-v1";
  const $ = (id) => document.getElementById(id);

  const state = {
    view: "today",
    cardIndex: 0,
    verbIndex: 0,
    verbDrill: null,
    quizItem: null,
    oralIndex: 0,
    progress: loadProgress()
  };

  function loadProgress() {
    try {
      return normalizeProgress(JSON.parse(localStorage.getItem(storeKey)) || {});
    } catch (_) {
      return freshProgress();
    }
  }

  function normalizeProgress(saved) {
    return { ...freshProgress(), ...saved };
  }

  function freshProgress() {
    return {
      knownCards: {},
      quizCorrect: 0,
      quizTotal: 0,
      streak: 0,
      completedTasks: {},
      oralNotes: {},
      oralSaid: {},
      mistakes: [],
      memory: [],
      knownVerbs: {},
      lastSaved: null,
      progressLog: []
    };
  }

  function saveProgress(reason = "autosave") {
    state.progress.lastSaved = new Date().toISOString();
    if (reason !== "autosave") {
      state.progress.progressLog.unshift({
        reason,
        at: state.progress.lastSaved
      });
      state.progress.progressLog = state.progress.progressLog.slice(0, 25);
    }
    localStorage.setItem(storeKey, JSON.stringify(state.progress));
    renderStats();
    if (state.view === "progress") renderProgress();
  }

  function allCards() {
    const selected = $("topicFilter").value;
    const cards = vocab.flashcards || [];
    if (!selected || selected === "all") return cards;
    return cards.filter((card) => card.topic === selected);
  }

  function allQuizItems() {
    const grammarQuiz = [];
    if (Array.isArray(grammar.quiz)) grammarQuiz.push(...grammar.quiz);
    if (Array.isArray(grammar.examTasks)) {
      grammar.examTasks.forEach((task) => {
        (task.items || []).forEach((item) => {
          grammarQuiz.push({
            kind: task.title || "gramatyka",
            type: task.type === "multiple-choice" ? "choice" : "gap",
            question: item.prompt,
            options: item.options,
            answer: item.answer,
            acceptedAnswers: item.acceptedAnswers,
            explain: item.explanation
          });
        });
      });
    }
    if (Array.isArray(grammar.gapFill)) {
      grammar.gapFill.forEach((item) => {
        grammarQuiz.push({
          kind: "luka gramatyczna",
          type: "gap",
          question: item.prompt,
          answer: item.answer,
          acceptedAnswers: item.acceptedAnswers,
          explain: item.explanation
        });
      });
    }
    const vocabQuiz = [];
    if (Array.isArray(vocab.quiz)) vocabQuiz.push(...vocab.quiz);
    if (Array.isArray(vocab.multipleChoice)) {
      vocab.multipleChoice.forEach((item) => {
        vocabQuiz.push({
          kind: item.topic || "slownictwo",
          type: "choice",
          question: item.question,
          options: item.options,
          answer: item.answer,
          explain: item.explanation
        });
      });
    }
    if (Array.isArray(vocab.gapFill)) {
      vocab.gapFill.forEach((item) => {
        vocabQuiz.push({
          kind: item.topic || "slownictwo",
          type: "gap",
          question: item.sentence || item.question,
          answer: item.answer,
          options: item.options,
          explain: item.explanation || item.instruction
        });
      });
    }
    if (Array.isArray(vocab.translationPrompts)) {
      vocab.translationPrompts.forEach((item) => {
        vocabQuiz.push({
          kind: `${item.topic || "slownictwo"}: PL -> ES`,
          type: "gap",
          question: item.pl,
          answer: item.modelAnswer,
          explain: "Porownaj z modelem; drobne warianty moga byc poprawne."
        });
      });
    }
    return [...grammarQuiz, ...vocabQuiz, ...(verbs.drills || [])];
  }

  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function normalize(text) {
    return String(text || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s*\/\s*/g, "/")
      .replace(/\s+/g, " ");
  }

  function renderStats() {
    const known = Object.keys(state.progress.knownCards).length;
    const knownVerbs = Object.keys(state.progress.knownVerbs || {}).length;
    const score = state.progress.quizTotal
      ? Math.round((state.progress.quizCorrect / state.progress.quizTotal) * 100)
      : 0;
    $("statKnown").textContent = known + knownVerbs;
    $("statScore").textContent = `${score}%`;
    $("statStreak").textContent = state.progress.streak;
    $("statSaved").textContent = formatTime(state.progress.lastSaved);
  }

  function setupTabs() {
    document.querySelectorAll(".tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.view = btn.dataset.view;
        document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab === btn));
        document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === state.view));
        if (state.view === "progress") renderProgress();
      });
    });
  }

  function setupToday() {
    const tasks = [
      { id: "flash10", title: "10 fiszek", detail: "Najpierw hiszpanski -> polski, potem przyklad na glos." },
      { id: "quiz8", title: "8 pytan quizu", detail: "Mieszanka gramatyki i slownictwa." },
      { id: "oral1", title: "1 odpowiedz ustna", detail: "Minimum 5 zdan po hiszpansku." },
      { id: "rule1", title: "1 zasada gramatyczna", detail: "Przeczytaj zasade i powiedz 2 wlasne zdania." }
    ];
    $("todayPlan").innerHTML = tasks.map((task) => {
      const done = state.progress.completedTasks[task.id] ? " done" : "";
      const checked = state.progress.completedTasks[task.id] ? "checked" : "";
      return `<label class="task${done}"><input type="checkbox" data-task="${task.id}" ${checked}><span><strong>${task.title}</strong><br>${task.detail}</span></label>`;
    }).join("");
    $("todayPlan").querySelectorAll("input").forEach((box) => {
      box.addEventListener("change", () => {
        state.progress.completedTasks[box.dataset.task] = box.checked;
        box.closest(".task").classList.toggle("done", box.checked);
        saveProgress(box.checked ? "ukonczono zadanie dzienne" : "odznaczono zadanie dzienne");
      });
    });
    const rules = grammar.rules || [];
    const rule = rules[new Date().getDate() % Math.max(rules.length, 1)];
    $("dailyRule").textContent = rule ? `${rule.title}: ${rule.short}` : "Powtorz dzisiaj subjuntivo i condicionales.";
    $("startSessionBtn").addEventListener("click", () => {
      document.querySelector('[data-view="flashcards"]').click();
    });
  }

  function setupFlashcards() {
    const topics = ["all", ...new Set((vocab.flashcards || []).map((card) => card.topic))];
    $("topicFilter").innerHTML = topics.map((topic) => `<option value="${topic}">${topic === "all" ? "wszystkie tematy" : topic}</option>`).join("");
    $("topicFilter").addEventListener("change", () => {
      state.cardIndex = 0;
      renderCard();
    });
    $("showCardBtn").addEventListener("click", revealCard);
    $("saveCardMemoryBtn").addEventListener("click", () => {
      const card = currentCard();
      if (!card) return;
      addMemory("slowo", `${card.es} - ${card.pl}\n${card.example}`);
    });
    $("againCardBtn").addEventListener("click", () => {
      nextCard();
    });
    $("knownCardBtn").addEventListener("click", () => {
      const card = currentCard();
      if (card) {
        state.progress.knownCards[`${card.topic}:${card.es}`] = true;
        state.progress.streak += 1;
        saveProgress(`fiszka opanowana: ${card.es}`);
      }
      nextCard();
    });
    $("flashcard").addEventListener("click", revealCard);
    renderCard();
  }

  function currentCard() {
    const cards = allCards();
    return cards[state.cardIndex % Math.max(cards.length, 1)];
  }

  function renderCard() {
    const card = currentCard();
    if (!card) return;
    $("cardTopic").textContent = card.topic;
    $("cardFront").textContent = card.es;
    $("cardBack").textContent = card.pl;
    $("cardExample").textContent = card.example;
    $("cardBack").classList.add("hidden");
    $("cardExample").classList.add("hidden");
  }

  function revealCard() {
    $("cardBack").classList.remove("hidden");
    $("cardExample").classList.remove("hidden");
  }

  function nextCard() {
    const cards = allCards();
    state.cardIndex = (state.cardIndex + 1) % Math.max(cards.length, 1);
    renderCard();
  }

  function setupQuiz() {
    $("newQuizBtn").addEventListener("click", renderQuiz);
    $("saveQuizMemoryBtn").addEventListener("click", () => {
      const item = state.quizItem;
      if (!item) return;
      addMemory("blad", `${item.question}\nPoprawnie: ${item.answer}`);
    });
    $("checkGapBtn").addEventListener("click", checkGap);
    $("gapInput").addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkGap();
    });
    renderQuiz();
  }

  function renderQuiz() {
    const items = allQuizItems();
    state.quizItem = items[Math.floor(Math.random() * items.length)];
    const item = state.quizItem;
    if (!item) return;
    $("quizKind").textContent = item.kind || "quiz";
    $("quizQuestion").textContent = item.question;
    $("quizFeedback").textContent = "";
    $("quizFeedback").className = "feedback";
    $("saveQuizMemoryBtn").classList.add("hidden");
    $("quizOptions").innerHTML = "";
    $("gapBox").classList.toggle("hidden", item.type !== "gap");
    $("gapInput").value = "";

    if (item.type === "choice") {
      shuffle(item.options || []).forEach((option) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = option;
        btn.addEventListener("click", () => checkChoice(btn, option));
        $("quizOptions").appendChild(btn);
      });
    }
  }

  function checkChoice(button, option) {
    const item = state.quizItem;
    const correct = normalize(option) === normalize(item.answer);
    document.querySelectorAll(".option").forEach((btn) => {
      btn.disabled = true;
      if (normalize(btn.textContent) === normalize(item.answer)) btn.classList.add("correct");
    });
    if (!correct) button.classList.add("wrong");
    finishQuiz(correct, item.explain);
  }

  function checkGap() {
    const item = state.quizItem;
    const answers = [item.answer, ...(item.acceptedAnswers || [])];
    const correct = answers.some((answer) => normalize($("gapInput").value) === normalize(answer));
    finishQuiz(correct, item.explain || `Poprawna odpowiedz: ${item.answer}`);
  }

  function finishQuiz(correct, explain) {
    state.progress.quizTotal += 1;
    if (correct) {
      state.progress.quizCorrect += 1;
      state.progress.streak += 1;
      $("quizFeedback").textContent = `Dobrze. ${explain || ""}`;
      $("quizFeedback").classList.add("good");
    } else {
      state.progress.streak = 0;
      state.progress.mistakes.unshift({
        question: state.quizItem.question,
        answer: state.quizItem.answer,
        kind: state.quizItem.kind || "quiz"
      });
      state.progress.mistakes = state.progress.mistakes.slice(0, 10);
      $("saveQuizMemoryBtn").classList.remove("hidden");
      $("quizFeedback").textContent = `Jeszcze raz. Poprawnie: ${state.quizItem.answer}. ${explain || ""}`;
      $("quizFeedback").classList.add("bad");
    }
    saveProgress("pytanie quizowe");
  }

  function setupGrammar() {
    const rules = grammar.rules || grammar.topics || [];
    $("grammarSelect").innerHTML = rules.map((rule, index) => `<option value="${index}">${rule.title}</option>`).join("");
    $("grammarSelect").addEventListener("change", renderGrammar);
    renderGrammar();
  }

  function renderGrammar() {
    const rule = (grammar.rules || grammar.topics || [])[$("grammarSelect").value || 0];
    if (!rule) return;
    $("grammarPanel").innerHTML = `
      <h3>${rule.title}</h3>
      <p>${rule.short || rule.shortRule || ""}</p>
      ${(rule.patterns || []).length ? `<p><strong>Schemat:</strong> ${(rule.patterns || []).join(" | ")}</p>` : ""}
      <ul class="rule-examples">${(rule.examples || []).map((example) => `<li>${example}</li>`).join("")}</ul>
      ${(rule.traps || []).length ? `<p><strong>Pulapki:</strong> ${(rule.traps || []).join(" ")}</p>` : ""}
      ${rule.trap ? `<p><strong>Pulapka:</strong> ${rule.trap}</p>` : ""}
    `;
  }

  function setupVerbs() {
    const categories = ["all", ...new Set((verbs.verbs || []).map((verb) => verb.category))];
    $("verbFilter").innerHTML = categories.map((category) => `<option value="${category}">${category === "all" ? "wszystkie" : category}</option>`).join("");
    $("verbFilter").addEventListener("change", () => {
      state.verbIndex = 0;
      renderVerb();
    });
    $("showVerbBtn").addEventListener("click", revealVerb);
    $("nextVerbBtn").addEventListener("click", nextVerb);
    $("knownVerbBtn").addEventListener("click", () => {
      const verb = currentVerb();
      if (!verb) return;
      state.progress.knownVerbs[verb.es] = true;
      state.progress.streak += 1;
      saveProgress(`czasownik opanowany: ${verb.es}`);
      nextVerb();
    });
    $("saveVerbMemoryBtn").addEventListener("click", () => {
      const verb = currentVerb();
      if (!verb) return;
      addMemory("czasownik", `${verb.es} - ${verb.pl}\npresente: ${verb.forms.presente}\nindefinido: ${verb.forms.indefinido}\nsubjuntivo: ${verb.forms.subjuntivo}\n${verb.example}`);
    });
    $("checkVerbDrillBtn").addEventListener("click", checkVerbDrill);
    $("verbDrillInput").addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkVerbDrill();
    });
    renderVerb();
    renderVerbDrill();
  }

  function filteredVerbs() {
    const selected = $("verbFilter").value;
    const items = verbs.verbs || [];
    if (!selected || selected === "all") return items;
    return items.filter((verb) => verb.category === selected);
  }

  function currentVerb() {
    const items = filteredVerbs();
    return items[state.verbIndex % Math.max(items.length, 1)];
  }

  function renderVerb() {
    const verb = currentVerb();
    if (!verb) return;
    $("verbCategory").textContent = verb.category;
    $("verbInfinitive").textContent = verb.es;
    $("verbMeaning").textContent = verb.pl;
    $("verbForms").innerHTML = Object.entries(verb.forms).map(([label, value]) => `<span><strong>${label}</strong><br>${value}</span>`).join("");
    $("verbExample").textContent = verb.example;
    $("verbForms").classList.add("hidden");
    $("verbExample").classList.add("hidden");
  }

  function revealVerb() {
    $("verbForms").classList.remove("hidden");
    $("verbExample").classList.remove("hidden");
  }

  function nextVerb() {
    const items = filteredVerbs();
    state.verbIndex = (state.verbIndex + 1) % Math.max(items.length, 1);
    renderVerb();
    renderVerbDrill();
  }

  function renderVerbDrill() {
    const drills = verbs.drills || [];
    state.verbDrill = drills[Math.floor(Math.random() * Math.max(drills.length, 1))];
    if (!state.verbDrill) return;
    $("verbDrillKind").textContent = state.verbDrill.kind;
    $("verbDrillQuestion").textContent = state.verbDrill.question;
    $("verbDrillInput").value = "";
    $("verbDrillFeedback").textContent = "";
    $("verbDrillFeedback").className = "feedback";
  }

  function checkVerbDrill() {
    const drill = state.verbDrill;
    if (!drill) return;
    const correct = normalize($("verbDrillInput").value) === normalize(drill.answer);
    if (correct) {
      state.progress.quizCorrect += 1;
      state.progress.streak += 1;
      $("verbDrillFeedback").textContent = `Dobrze. ${drill.explain || ""}`;
      $("verbDrillFeedback").classList.add("good");
    } else {
      state.progress.streak = 0;
      state.progress.mistakes.unshift({ question: drill.question, answer: drill.answer, kind: drill.kind });
      state.progress.mistakes = state.progress.mistakes.slice(0, 10);
      $("verbDrillFeedback").textContent = `Poprawnie: ${drill.answer}.`;
      $("verbDrillFeedback").classList.add("bad");
    }
    state.progress.quizTotal += 1;
    saveProgress("drill czasownikow");
    setTimeout(renderVerbDrill, 900);
  }

  function setupOral() {
    $("newPromptBtn").addEventListener("click", nextOral);
    $("showModelBtn").addEventListener("click", () => $("oralModel").classList.toggle("hidden"));
    $("saveOralBtn").addEventListener("click", () => {
      const prompt = currentOral();
      if (!prompt) return;
      state.progress.oralNotes[prompt.topic] = $("oralNotes").value;
      saveProgress(`notatka ustna: ${prompt.topic}`);
    });
    $("saidOralBtn").addEventListener("click", () => {
      const prompt = currentOral();
      if (!prompt) return;
      state.progress.oralSaid[prompt.topic] = true;
      state.progress.streak += 1;
      saveProgress(`temat ustny powiedziany: ${prompt.topic}`);
      $("saidOralBtn").textContent = "Zapisane";
    });
    renderPhrases();
    renderOral();
  }

  function renderPhrases() {
    const phrases = vocab.usefulPhrases || {};
    const selected = Object.entries(phrases)
      .flatMap(([group, items]) => (items || []).slice(0, 3).map((text) => ({ group, text })))
      .slice(0, 18);
    $("oralPhrases").innerHTML = selected.map((item) => `<span class="pill" title="${item.group}">${item.text}</span>`).join("");
  }

  function currentOral() {
    const prompts = vocab.oral || vocab.speakingPrompts || [];
    return prompts[state.oralIndex % Math.max(prompts.length, 1)];
  }

  function nextOral() {
    const prompts = vocab.oral || vocab.speakingPrompts || [];
    state.oralIndex = (state.oralIndex + 1) % Math.max(prompts.length, 1);
    renderOral();
  }

  function renderOral() {
    const prompt = currentOral();
    if (!prompt) return;
    $("oralTopic").textContent = prompt.topic;
    $("oralPrompt").textContent = prompt.prompt;
    $("oralModel").textContent = prompt.model || prompt.modelAnswer || "";
    $("oralModel").classList.add("hidden");
    $("oralNotes").value = state.progress.oralNotes[prompt.topic] || "";
    $("saidOralBtn").textContent = state.progress.oralSaid[prompt.topic] ? "Powiedziane" : "Powiedziane na glos";
  }

  function renderProgress() {
    const cards = vocab.flashcards || [];
    const known = Object.keys(state.progress.knownCards).length;
    const knownVerbs = Object.keys(state.progress.knownVerbs || {}).length;
    const score = state.progress.quizTotal
      ? Math.round((state.progress.quizCorrect / state.progress.quizTotal) * 100)
      : 0;
    $("knownSummary").textContent = `Znasz ${known} z ${cards.length} fiszek i ${knownVerbs} z ${(verbs.verbs || []).length} czasownikow.`;
    $("quizSummary").textContent = `Wynik: ${state.progress.quizCorrect}/${state.progress.quizTotal}, czyli ${score}%.`;
    $("nextStep").textContent = score < 70
      ? "Zrob 8 pytan quizu i powtorz bledne struktury."
      : known < Math.min(cards.length, 40)
        ? "Przerob kolejnych 10 fiszek i powiedz przyklady na glos."
        : "Przejdz do trybu ustnego i przygotuj odpowiedzi 5-6 zdan.";
    const mistakes = state.progress.mistakes || [];
    $("mistakeSummary").innerHTML = mistakes.length
      ? mistakes.map((item) => `<span class="pill">${item.kind}</span> ${item.question} -> <strong>${item.answer}</strong>`).join("<br>")
      : "Brak zapisanych bledow. Zrob quiz mieszany, zeby aplikacja wiedziala, co powtarzac.";
    $("saveSummary").textContent = state.progress.lastSaved
      ? `Ostatni zapis w pamieci strony: ${formatDateTime(state.progress.lastSaved)}. Dane zostaja po odswiezeniu tej strony w tej samej przegladarce.`
      : "Postep nie byl jeszcze zapisany.";
    const log = state.progress.progressLog || [];
    $("progressLog").innerHTML = log.length
      ? log.slice(0, 12).map((item) => `<div class="memory-item"><span class="pill">${formatTime(item.at)}</span><p>${escapeHtml(item.reason)}</p></div>`).join("")
      : "<p>Historia postepow pojawi sie po akcjach typu fiszka, quiz, czasownik, temat ustny albo wpis do pamieci.</p>";
  }

  function setupReset() {
    $("resetBtn").addEventListener("click", () => {
      if (!confirm("Zresetowac postep w tej przegladarce?")) return;
      state.progress = freshProgress();
      saveProgress("reset postepu");
      setupToday();
      renderProgress();
    });
  }

  function boot() {
    setupTabs();
    setupToday();
    setupFlashcards();
    setupQuiz();
    setupGrammar();
    setupVerbs();
    setupOral();
    setupMemory();
    setupReset();
    renderStats();
  }

  function addMemory(type, text) {
    const clean = String(text || "").trim();
    if (!clean) return;
    state.progress.memory.unshift({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      type,
      text: clean,
      createdAt: new Date().toISOString(),
      reviewed: 0
    });
    state.progress.memory = state.progress.memory.slice(0, 200);
    saveProgress(`dodano do pamieci: ${type}`);
    renderMemory();
  }

  function setupMemory() {
    $("saveMemoryBtn").addEventListener("click", () => {
      addMemory($("memoryType").value, $("memoryText").value);
      $("memoryText").value = "";
    });
    $("exportMemoryBtn").addEventListener("click", () => {
      const rows = (state.progress.memory || []).map((item, index) => `${index + 1}. [${item.type}] ${item.text}`);
      $("memoryExport").value = rows.join("\n\n");
      $("memoryExport").classList.toggle("hidden", !rows.length);
      if (rows.length) $("memoryExport").select();
    });
    renderMemory();
  }

  function renderMemory() {
    const memory = state.progress.memory || [];
    if (!$("memoryStats")) return;
    $("memoryStats").textContent = memory.length
      ? `Masz ${memory.length} zapisanych rzeczy. Kliknij "powtorzone", gdy umiesz powiedziec to na glos.`
      : "Pamiec jest pusta. Dodawaj tu bledy, zdania i fiszki, ktore chcesz powtorzyc.";
    $("memoryList").innerHTML = memory.slice(0, 60).map((item) => `
      <div class="memory-item">
        <span class="pill">${item.type}</span>
        <p>${escapeHtml(item.text).replace(/\n/g, "<br>")}</p>
        <button data-memory-done="${item.id}">Powtorzone</button>
        <button data-memory-delete="${item.id}" class="danger">Usun</button>
      </div>
    `).join("");
    $("memoryList").querySelectorAll("[data-memory-done]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = memory.find((entry) => entry.id === button.dataset.memoryDone);
        if (item) item.reviewed = (item.reviewed || 0) + 1;
        state.progress.streak += 1;
        saveProgress("powtorka z pamieci");
        renderMemory();
      });
    });
    $("memoryList").querySelectorAll("[data-memory-delete]").forEach((button) => {
      button.addEventListener("click", () => {
        state.progress.memory = memory.filter((entry) => entry.id !== button.dataset.memoryDelete);
        saveProgress("usunieto wpis z pamieci");
        renderMemory();
      });
    });
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatTime(iso) {
    if (!iso) return "--:--";
    return new Date(iso).toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });
  }

  function formatDateTime(iso) {
    if (!iso) return "";
    return new Date(iso).toLocaleString("pl-PL", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  window.addEventListener("beforeunload", () => {
    state.progress.lastSaved = new Date().toISOString();
    localStorage.setItem(storeKey, JSON.stringify(state.progress));
  });

  boot();
})();
