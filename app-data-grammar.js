(function () {
  window.GRAMMAR_DATA = {
    meta: {
      title: "Gramatyka B1 - egzamin",
      level: "B1",
      source: "egzamin/gramatyka_B1_egzamin.md",
      language: "es-PL",
      description:
        "Dane do statycznej aplikacji HTML/JS: tematy gramatyczne, zasady, przyklady, zadania egzaminacyjne i luki z odpowiedziami.",
    },

    quickMap: [
      "presente, pretérito perfecto, indefinido, imperfecto, pluscuamperfecto",
      "futuro simple i condicional simple",
      "imperativo afirmativo i negativo",
      "presente, perfecto i imperfecto de subjuntivo",
      "peryfrazy czasownikowe",
      "qué / cuál",
      "indefinidos: algo, nada, alguien, nadie, alguno, ninguno",
      "zaimki objeto directo i indirecto",
      "condicionales 1 i 2",
      "estilo indirecto",
      "funkcje jezykowe na ustny: opinia, emocje, pozwolenie, rady, zgoda, negocjacje",
    ],

    topics: [
      {
        id: "presente-indicativo",
        title: "Presente de indicativo",
        category: "czasy",
        shortRule:
          "Uzywaj do rutyny, faktow, aktualnych stanow i harmonogramow.",
        patterns: [
          "-ar: trabajo, trabajas, trabaja, trabajamos, trabajais, trabajan",
          "-er: vendo, vendes, vende, vendemos, vendeis, venden",
          "-ir: vivo, vives, vive, vivimos, vivis, viven",
        ],
        examples: [
          "Normalmente la oficina abre a las ocho.",
          "Trabajo en el departamento de marketing.",
          "Nuestra empresa vende productos en varios paises.",
          "El proveedor nos envia la mercancia los lunes.",
          "La cuenta corriente sirve para pagar y hacer transferencias.",
        ],
        traps: [
          "Po normalmente, siempre, cada semana zwykle wybierasz indicativo.",
          "Cuando tengo tiempo, voy de compras oznacza zwyczaj, wiec jest indicativo.",
        ],
        miniExercise: [
          {
            prompt: "Normalmente, la secretaria ___ (concertar) citas con los clientes.",
            answer: "concierta",
            explanation:
              "Normalmente wskazuje rutynowa czynnosc, dlatego uzywamy presente.",
          },
          {
            prompt: "Nosotros ___ (revisar) los pedidos todos los dias.",
            answer: "revisamos",
            explanation:
              "Todos los dias oznacza powtarzalnosc; forma nosotros od revisar to revisamos.",
          },
          {
            prompt: "La empresa ___ (tener) una sucursal en Valencia.",
            answer: "tiene",
            explanation:
              "To aktualny stan/fakt firmy; tener w 3. osobie liczby pojedynczej to tiene.",
          },
        ],
      },

      {
        id: "preterito-perfecto",
        title: "Pretérito perfecto",
        category: "czasy",
        shortRule:
          "Uzywaj do wydarzen zwiazanych z terazniejszoscia albo okresow niedokonczonych.",
        patterns: [
          "he/has/ha/hemos/habeis/han + participio",
          "Typowe sygnaly: hoy, esta semana, este ano, ultimamente, ya, todavia no.",
        ],
        examples: [
          "Hoy he recibido la entrega del ultimo pedido.",
          "Esta semana hemos preparado una oferta para el cliente.",
          "La empresa ha empezado a disenar una nueva interfaz.",
          "Todavia no han aprobado el presupuesto.",
          "Ya hemos enviado la documentacion.",
        ],
        traps: [
          "Ayer, la semana pasada i en 2024 zwykle wymagaja indefinido.",
          "Ha empezado a laczy pretérito perfecto z peryfraza empezar a.",
        ],
        miniExercise: [
          {
            prompt: "Hoy nosotros ___ (recibir) una muestra gratuita.",
            answer: "hemos recibido",
            explanation:
              "Hoy to okres niedokonczony; nosotros wymaga hemos + participio.",
          },
          {
            prompt: "Esta manana el gerente ___ (salir) a una reunion.",
            answer: "ha salido",
            explanation:
              "Esta manana moze byc traktowane jako zwiazane z terazniejszoscia; el gerente = ha salido.",
          },
          {
            prompt: "Todavia no ___ (yo, pagar) el importe total.",
            answer: "he pagado",
            explanation:
              "Todavia no czesto laczy sie z pretérito perfecto: he pagado.",
          },
        ],
      },

      {
        id: "preterito-indefinido",
        title: "Pretérito indefinido",
        category: "czasy",
        shortRule:
          "Uzywaj do zakonczonych wydarzen w zakonczonym czasie.",
        patterns: [
          "Typowe sygnaly: ayer, la semana pasada, el ano pasado, en 2023, hace dos dias.",
          "Nieregularne: estuve, tuve, hice/hizo, pude, puse, vine, dije, leyo/leyeron, durmio/durmieron.",
        ],
        examples: [
          "La semana pasada contratamos al nuevo contable.",
          "Ayer me reuni con el nuevo cliente.",
          "La secretaria concerto la cita para manana.",
          "Los jefes asistieron al congreso en Madrid.",
          "No pudimos solucionar el problema.",
        ],
        traps: [
          "La semana pasada estaba de baja jest opisowe, ale w zadaniu z konkretnym okresem czesto oczekuje sie estuve de baja.",
          "Leer ma y w 3. osobie: leyo, leyeron.",
        ],
        miniExercise: [
          {
            prompt: "La semana pasada ___ (contratar, nosotros) al nuevo contable.",
            answer: "contratamos",
            explanation:
              "La semana pasada to zamkniety czas, dlatego indefinido.",
          },
          {
            prompt: "Los clientes ___ (leer) el informe de la fusion.",
            answer: "leyeron",
            explanation:
              "Leer w 3. osobie liczby mnogiej indefinido przyjmuje forme leyeron.",
          },
          {
            prompt: "Mis companeros ___ (hacer) horas extra.",
            answer: "hicieron",
            explanation:
              "Hacer jest nieregularne w indefinido: ellos hicieron.",
          },
          {
            prompt: "¿Que te ___ (decir, el) el jefe?",
            answer: "dijo",
            explanation:
              "Decir w 3. osobie liczby pojedynczej indefinido to dijo.",
          },
        ],
      },

      {
        id: "preterito-imperfecto",
        title: "Pretérito imperfecto",
        category: "czasy",
        shortRule:
          "Uzywaj do tla historii, zwyczajow w przeszlosci, opisow osob, miejsc i stanow.",
        patterns: [
          "Czesty kontrast: mientras + imperfecto, akcja punktowa w indefinido.",
          "Imperfecto opisuje sytuacje, indefinido przesuwa akcje do przodu.",
        ],
        examples: [
          "Antes teniamos reuniones todos los lunes.",
          "Cuando Lucas era responsable del proyecto, se sentia bajo mucha presion.",
          "La negociacion era muy tensa y los clientes no estaban satisfechos.",
          "Mientras los ingenieros explicaban la maquinaria, los inversores tomaban notas.",
          "En mi antiguo empleo revisabamos los objetivos cada semana.",
        ],
        traps: [
          "Indefinido = akcja glowna lub punktowa, np. se corto la conexion.",
          "Imperfecto = tlo, opis lub zwyczaj, np. la directora presentaba el balance.",
        ],
        miniExercise: [
          {
            prompt:
              "Mientras yo ___ (trabajar), la empresa ___ (lanzar) su producto estrella.",
            answer: "trabajaba / lanzo",
            explanation:
              "Trabajaba tworzy tlo, a lanzo jest zakonczona akcja punktowa.",
          },
          {
            prompt: "En mi antiguo empleo nosotros ___ (tener) reuniones cada lunes.",
            answer: "teniamos",
            explanation:
              "Cada lunes w przeszlosci opisuje zwyczaj, wiec imperfecto.",
          },
          {
            prompt:
              "La negociacion ___ (ser) tensa, pero al final ___ (llegar, nosotros) a un acuerdo.",
            answer: "era / llegamos",
            explanation:
              "Era opisuje sytuacje, a llegamos oznacza zakonczony rezultat.",
          },
        ],
      },

      {
        id: "pluscuamperfecto",
        title: "Pluscuamperfecto",
        category: "czasy",
        shortRule:
          "Uzywaj, gdy jedna czynnosc wydarzyla sie wczesniej niz inna czynnosc w przeszlosci.",
        patterns: ["habia/habias/habia/habiamos/habiais/habian + participio"],
        examples: [
          "Cuando llegue, el director ya habia revisado el informe.",
          "No pudimos enviar el pedido porque el cliente no habia pagado.",
          "El sistema se bloqueo porque alguien habia introducido un codigo incorrecto.",
          "Cuando empezo la reunion, ya habiamos preparado la presentacion.",
        ],
        traps: [
          "Pluscuamperfecto odpowiada sensowi: cos bylo zrobione juz wczesniej.",
        ],
        miniExercise: [
          {
            prompt: "Cuando llegue a la oficina, Ana ya ___ (enviar) la oferta.",
            answer: "habia enviado",
            explanation:
              "Oferta zostala wyslana przed przyjsciem, wiec potrzebny jest pluscuamperfecto.",
          },
          {
            prompt:
              "No entendimos el problema porque nadie nos ___ (explicar) el cambio.",
            answer: "habia explicado",
            explanation:
              "Wyjasnienie powinno bylo nastapic przed momentem niezrozumienia.",
          },
          {
            prompt:
              "El cliente cancelo el pedido porque la empresa no lo ___ (entregar) a tiempo.",
            answer: "habia entregado",
            explanation:
              "Niedostarczenie nastapilo przed anulowaniem zamowienia.",
          },
        ],
      },

      {
        id: "futuro-simple",
        title: "Futuro simple",
        category: "czasy",
        shortRule: "Uzywaj do planow, przewidywan i obietnic.",
        patterns: [
          "infinitivo + -e, -as, -a, -emos, -eis, -an",
          "Po cuando, en cuanto, hasta que z sensem przyszlym uzyj subjuntivo.",
        ],
        examples: [
          "Manana llamare al proveedor.",
          "El ano que viene abriremos una nueva sucursal.",
          "La tecnologia cambiara el mercado laboral.",
          "Te enviare el presupuesto esta tarde.",
          "Cuando tenga tiempo, preparare la presentacion.",
        ],
        traps: ["Cuando tenga tiempo, nie cuando tendre tiempo."],
        miniExercise: [
          {
            prompt: "Manana nosotros ___ (hacer) balance anual.",
            answer: "haremos",
            explanation:
              "Manana kieruje na przyszlosc; nosotros od hacer to haremos.",
          },
          {
            prompt: "El cliente ___ (recibir) la entrega el lunes.",
            answer: "recibira",
            explanation:
              "To przyszle wydarzenie; 3. osoba liczby pojedynczej futuro to recibira.",
          },
          {
            prompt: "Cuando ___ (tener, yo) tiempo, te llamare.",
            answer: "tenga",
            explanation:
              "Po cuando z przyszloscia stosujemy presente de subjuntivo.",
          },
        ],
      },

      {
        id: "condicional-simple",
        title: "Condicional simple",
        category: "czasy",
        shortRule:
          "Uzywaj do rad, uprzejmosci, hipotez i planow zaleznych od warunkow.",
        patterns: ["infinitivo + -ia, -ias, -ia, -iamos, -iais, -ian"],
        examples: [
          "Yo que tu cambiaria de trabajo.",
          "Si fuera tu, hablaria con el jefe.",
          "¿Podrias enviarme el catalogo?",
          "Me gustaria montar un negocio en el sector tecnologico.",
          "Seria mejor preparar una oferta mas flexible.",
        ],
        traps: [
          "Si fuera tu, cambiaria to condicional 2.",
          "Po me gustaria que zwykle idzie imperfecto de subjuntivo.",
        ],
        miniExercise: [
          {
            prompt: "Yo que tu ___ (pedir) una subvencion.",
            answer: "pediria",
            explanation: "Yo que tu wprowadza rade, wiec condicional.",
          },
          {
            prompt: "¿___ (poder, usted) mandarme el presupuesto?",
            answer: "Podria",
            explanation:
              "Podria jest uprzejma forma prosby w condicional simple.",
          },
          {
            prompt: "Si tuviera mas capital, ___ (invertir) en marketing digital.",
            answer: "invertiria",
            explanation:
              "Si + imperfecto de subjuntivo laczy sie z condicional.",
          },
        ],
      },

      {
        id: "imperativo",
        title: "Imperativo afirmativo i negativo",
        category: "tryby",
        shortRule: "Uzywaj do polecen, instrukcji, zakazow i rad.",
        patterns: [
          "Afirmativo tu: habla, come, vive; nieregularne: sal, ven, pon, haz, di, ve, se.",
          "Negativo tworzy sie jak presente de subjuntivo: no llegues, no interrumpas, no vengas.",
          "Usted/ustedes w afirmativo tez ida przez formy subjuntivo: hable, hablen, salga, salgan.",
        ],
        examples: [
          "Julio, ven un momento.",
          "Chicos, sed amables con Jose.",
          "Senora Lopez, conozca al director.",
          "Coja una silla y sientese.",
          "No interrumpas al cliente.",
          "No usen ese codigo.",
        ],
        traps: [
          "Afirmativo: pon, haz, ven.",
          "Negativo: no pongas, no hagas, no vengas.",
        ],
        miniExercise: [
          {
            prompt: "Julio, ___ (venir) un momento.",
            answer: "ven",
            explanation: "Venir ma nieregularny imperativo afirmativo tu: ven.",
          },
          {
            prompt: "Chicos, ___ (ser) amables.",
            answer: "sed",
            explanation: "Ser w vosotros ma forme sed.",
          },
          {
            prompt: "___ (salir, ustedes) de la oficina.",
            answer: "salgan",
            explanation:
              "Ustedes uzywa formy subjuntivo presente: salgan.",
          },
          {
            prompt: "No ___ (interrumpir, tu) al cliente.",
            answer: "interrumpas",
            explanation:
              "Imperativo negativo tu tworzy sie jak subjuntivo: no interrumpas.",
          },
          {
            prompt: "___ (hacer, ustedes) el favor de no molestar.",
            answer: "hagan",
            explanation: "Hacer dla ustedes w imperativo to hagan.",
          },
        ],
      },

      {
        id: "subjuntivo-presente",
        title: "Presente de subjuntivo",
        category: "subjuntivo",
        shortRule:
          "Uzywaj po woli, emocji, watpliwosci, celu, ocenie, przyszlych zdaniach czasowych i przy nieokreslonym podmiocie.",
        patterns: [
          "Wyzwalacze: quiero que, necesito que, es importante que, me alegra que, no creo que, dudo que, para que, antes de que.",
          "Futurystyczne cuando, en cuanto, hasta que wymagaja subjuntivo.",
          "Szukam niekonkretnej rzeczy: busco una oficina que sea luminosa.",
        ],
        examples: [
          "Busco una oficina que sea luminosa.",
          "Necesitamos una oficina que tenga 300 metros cuadrados.",
          "No hay nadie que sepa la verdad.",
          "Es importante que compruebes la informacion antes de enviarla.",
          "Te llamare en cuanto tenga tiempo.",
          "No pienso que la reunion sea necesaria.",
        ],
        traps: [
          "Conozco una oficina que tiene garaje = znam konkretna.",
          "Busco una oficina que tenga garaje = szukam, nie wiem czy istnieje.",
          "No tengo dudas de que tienes razon = pewnosc.",
          "Tengo dudas de que tengas razon = watpliwosc.",
        ],
        miniExercise: [
          {
            prompt: "Buscamos una oficina que ___ (estar) en el centro.",
            answer: "este",
            explanation:
              "Szukana biuro nie jest konkretne, dlatego subjuntivo.",
          },
          {
            prompt: "No existe nadie que ___ (saber) eso.",
            answer: "sepa",
            explanation:
              "Po nieistnieniu/braku osoby uzywamy subjuntivo.",
          },
          {
            prompt: "Antes de que te ___ (casar), piensa bien.",
            answer: "cases",
            explanation:
              "Antes de que wymaga subjuntivo przy innym podmiocie.",
          },
          {
            prompt: "Te llamare en cuanto ___ (tener) tiempo.",
            answer: "tenga",
            explanation:
              "En cuanto z przyszlym znaczeniem wymaga subjuntivo.",
          },
          {
            prompt: "Tengo informacion que ___ (ser) muy util.",
            answer: "es",
            explanation:
              "Informacja jest konkretna i znana, dlatego indicativo.",
          },
          {
            prompt: "Tengo dudas de que ___ (tener, tu) razon.",
            answer: "tengas",
            explanation:
              "Dudas de que wyraza watpliwosc i uruchamia subjuntivo.",
          },
        ],
      },

      {
        id: "subjuntivo-perfecto",
        title: "Pretérito perfecto de subjuntivo",
        category: "subjuntivo",
        shortRule:
          "Uzywaj, gdy oceniasz zakonczona czynnosc zwiazana z terazniejszoscia.",
        patterns: ["haya/hayas/haya/hayamos/hayais/hayan + participio"],
        examples: [
          "Me alegra que hayas encontrado trabajo.",
          "Es posible que la empresa haya recibido una subvencion.",
          "No creo que hayan enviado el pedido.",
          "Es una pena que el cliente no haya aceptado la oferta.",
          "Dudo que hayamos cometido un error.",
        ],
        traps: [
          "Creo que han enviado el pedido = indicativo.",
          "No creo que hayan enviado el pedido = subjuntivo.",
        ],
        miniExercise: [
          {
            prompt: "Me sorprende que ellos no ___ (llegar) todavia.",
            answer: "hayan llegado",
            explanation:
              "Me sorprende que wymaga subjuntivo, a todavia wskazuje czynnosc zakonczona/oczekiwana do teraz.",
          },
          {
            prompt: "No creo que la empresa ___ (aprobar) el presupuesto.",
            answer: "haya aprobado",
            explanation:
              "No creo que wymaga subjuntivo perfecto dla czynnosci juz ocenianej.",
          },
          {
            prompt: "Es posible que nosotros ___ (perder) una oportunidad.",
            answer: "hayamos perdido",
            explanation:
              "Es posible que uruchamia subjuntivo; nosotros = hayamos perdido.",
          },
        ],
      },

      {
        id: "subjuntivo-imperfecto",
        title: "Imperfecto de subjuntivo",
        category: "subjuntivo",
        shortRule:
          "Uzywaj po emocjach, opinii, pragnieniu i watpliwosci w przeszlosci oraz w zdaniach hipotetycznych.",
        patterns: [
          "hablara/hablase, comiera/comiese, viviera/viviese",
          "Nieregularne: fuera, tuviera, hiciera, dijera.",
          "Condicional 2: si + imperfecto de subjuntivo, condicional.",
        ],
        examples: [
          "Me sorprendio que ellos fueran tan hospitalarios.",
          "Esperaba que me enviaran la documentacion.",
          "Era importante que tuvieramos mas tiempo.",
          "Me molesto que el vecino escuchara musica tan alta.",
          "Ojala tuviera 18 anos otra vez.",
          "Si fuera tu, hablaria con el gerente.",
        ],
        traps: [
          "Me sorprende que sean = terazniejszosc.",
          "Me sorprendio que fueran = przeszlosc.",
          "Ojala haga buen tiempo manana jest mozliwe dla przyszlosci, ale Ojala tuviera... jest nierzeczywiste.",
        ],
        miniExercise: [
          {
            prompt: "Me sorprendio que la gente ___ (ser) tan hospitalaria.",
            answer: "fuera",
            explanation:
              "Me sorprendio que przenosi reakcje do przeszlosci, wiec imperfecto de subjuntivo.",
          },
          {
            prompt: "Esperaba que mis companeros ___ (confiar) en mi.",
            answer: "confiaran",
            explanation:
              "Esperaba que wymaga imperfecto de subjuntivo.",
          },
          {
            prompt: "Si yo ___ (tener) mas experiencia, pediria un ascenso.",
            answer: "tuviera",
            explanation:
              "To drugi okres warunkowy: si + imperfecto de subjuntivo.",
          },
          {
            prompt: "Me molesto que me ___ (interrumpir, ellos) cada cinco minutos.",
            answer: "interrumpieran",
            explanation:
              "Me molesto que w przeszlosci uruchamia imperfecto de subjuntivo.",
          },
        ],
      },

      {
        id: "perifrasis-verbales",
        title: "Peryfrazy czasownikowe",
        category: "konstrukcje",
        shortRule:
          "Peryfrazy lacza czasownik pomocniczy z gerundio lub infinitivo i dodaja znaczenie: trwanie, poczatek, powtorzenie, kontynuacja albo swiezosc czynnosci.",
        patterns: [
          "estar + gerundio = byc w trakcie",
          "empezar a + infinitivo = zaczac",
          "acabar de + infinitivo = wlasnie cos zrobic",
          "volver a + infinitivo = zrobic ponownie",
          "dejar de + infinitivo = przestac",
          "seguir + gerundio = nadal cos robic",
          "llevar + gerundio = robic cos od jakiegos czasu",
        ],
        examples: [
          "Estoy preparando una oferta.",
          "La empresa empezo a exportar.",
          "El gerente acaba de salir.",
          "Tengo que volver a redactarlo.",
          "Seguimos trabajando con calidad.",
          "Llevo dos anos trabajando aqui.",
        ],
        traps: [
          "Acabar de + infinitivo znaczy dopiero co, nie ogolnie skonczyc robic.",
          "Volver a + infinitivo zawsze zaklada powtorzenie.",
        ],
        miniExercise: [
          {
            prompt: "Hace un minuto el gerente ___ a una reunion. (acabar de salir)",
            answer: "acaba de salir",
            explanation:
              "Hace un minuto pasuje do znaczenia 'dopiero co': acaba de salir.",
          },
          {
            prompt:
              "El informe fue rechazado; tenemos que ___ desde cero. (volver a redactar)",
            answer: "volver a redactarlo",
            explanation:
              "Trzeba napisac raport ponownie, dlatego volver a redactarlo.",
          },
          {
            prompt:
              "La empresa ___ trabajando con los mismos proveedores. (seguir)",
            answer: "sigue",
            explanation:
              "Seguir + gerundio oznacza kontynuacje: sigue trabajando.",
          },
          {
            prompt: "___ dos anos estudiando espanol. (llevar)",
            answer: "Llevo",
            explanation:
              "Llevar + okres + gerundio opisuje, od jak dawna cos trwa.",
          },
        ],
      },

      {
        id: "que-cual",
        title: "Qué / cuál",
        category: "pytania",
        shortRule:
          "Qué pyta o definicje, rzecz, czynnosc albo stoi przed rzeczownikiem. Cuál wybiera z grupy i zwykle wystepuje bez rzeczownika.",
        patterns: [
          "¿Qué es...? = co to jest?",
          "¿Qué + rzeczownik...? = jaki/ktory przed rzeczownikiem",
          "¿Cuál prefieres...? = ktory wybierasz z opcji",
          "¿Cuál es...? = ktory/jaki jest z grupy mozliwosci",
        ],
        examples: [
          "¿Que es una sucursal?",
          "¿Que documentos necesita el cliente?",
          "¿Cual prefieres: esta oficina o aquella?",
          "¿Cual es el objetivo de la reunion?",
          "¿Cuales son las ventajas del teletrabajo?",
        ],
        traps: [
          "Mowimy ¿Que empresa...?, ale ¿Cual es la empresa...?",
          "Mowimy ¿Que significa...?, nie ¿Cual significa...?",
        ],
        miniExercise: [
          {
            prompt: "¿___ es una jornada de puertas abiertas?",
            answer: "Que",
            explanation:
              "Pytasz o definicje, wiec uzywasz que.",
          },
          {
            prompt: "¿___ prefieres, la oferta A o la B?",
            answer: "Cual",
            explanation:
              "To wybor z dwoch ofert, wiec cual.",
          },
          {
            prompt: "¿___ son tus planes de futuro?",
            answer: "Cuales",
            explanation:
              "Pytanie o wybor/identyfikacje planow bez rzeczownika: cuales.",
          },
          {
            prompt: "¿___ producto quieres presentar en la feria?",
            answer: "Que",
            explanation:
              "Przed rzeczownikiem producto standardowo uzywa sie que.",
          },
        ],
      },

      {
        id: "indefinidos",
        title: "Indefinidos: algo, nada, alguien, nadie, alguno, ninguno",
        category: "zaimki",
        shortRule:
          "Uzywaj do mowienia o czyms/nikim, kims/nikim oraz jakims/zadnym elemencie.",
        patterns: [
          "algo = cos; nada = nic",
          "alguien = ktos; nadie = nikt",
          "alguno/a/os/as = jakis, ktorys",
          "ninguno/a = zaden; przed meskim rzeczownikiem pojedynczym: ningun",
        ],
        examples: [
          "Hay algo importante en el informe.",
          "No hay ninguna persona que sepa la verdad.",
          "Busco algun proveedor local.",
          "No conozco a nadie en esta empresa.",
          "¿Alguien puede atender al cliente?",
          "No tengo ningun problema con el horario.",
        ],
        traps: [
          "Mowimy ningun problema i algun cliente przed meskim rzeczownikiem pojedynczym.",
          "No hay nada que me guste czesto wymaga subjuntivo po braku/nieistnieniu.",
        ],
        miniExercise: [
          {
            prompt: "No conozco a ___ en esta ciudad.",
            answer: "nadie",
            explanation:
              "Po no conozco a potrzebny jest odpowiednik 'nikogo': nadie.",
          },
          {
            prompt: "¿Tienes ___ pregunta antes de empezar?",
            answer: "alguna",
            explanation:
              "Pregunta jest rodzaju zenskiego, dlatego alguna.",
          },
          {
            prompt: "No hay ___ oficina disponible.",
            answer: "ninguna",
            explanation:
              "Oficina jest zenska, a zdanie jest negatywne: ninguna.",
          },
          {
            prompt: "Necesito ___ para conectar el movil.",
            answer: "algo",
            explanation:
              "Chodzi o 'cos' nieokreslonego: algo.",
          },
        ],
      },

      {
        id: "pronombres-objeto",
        title: "Zaimki objeto directo i indirecto",
        category: "zaimki",
        shortRule:
          "Objeto directo odpowiada na kogo/co, objeto indirecto na komu/czemu. Przy dwoch zaimkach kolejnosc to indirecto + directo.",
        patterns: [
          "Objeto directo: me, te, lo/la, nos, os, los/las",
          "Objeto indirecto: me, te, le, nos, os, les",
          "le/les + lo/la/los/las zmienia sie w se lo/la/los/las",
          "Bezokolicznik moze dokleic zaimki: voy a explicarselo.",
        ],
        examples: [
          "Envie el informe al jefe. -> Se lo envie.",
          "Compre las muestras para los clientes. -> Se las compre.",
          "Te mando el presupuesto manana.",
          "La secretaria nos explico el procedimiento.",
          "Voy a entregarselo al gerente.",
        ],
        traps: [
          "Le envie el informe = wyslalem mu/jej raport.",
          "Lo envie = wyslalem go.",
          "Se lo envie = wyslalem mu/jej go.",
        ],
        miniExercise: [
          {
            prompt: "Envie la oferta al cliente. -> ___ ___ envie.",
            answer: "Se la",
            explanation:
              "Al cliente = le, la oferta = la; le + la zmienia sie w se la.",
          },
          {
            prompt: "Compramos las entradas para Ana. -> ___ ___ compramos.",
            answer: "Se las",
            explanation:
              "Para Ana = le, las entradas = las; le + las daje se las.",
          },
          {
            prompt: "El proveedor mando el catalogo a nosotros. -> ___ ___ mando.",
            answer: "Nos lo",
            explanation:
              "A nosotros = nos, el catalogo = lo; kolejnosc: nos lo.",
          },
          {
            prompt: "Voy a explicar el problema al jefe. -> Voy a ___.",
            answer: "explicarselo",
            explanation:
              "Al jefe = se, el problema = lo; przy bezokoliczniku mozna dokleic: explicarselo.",
          },
        ],
      },

      {
        id: "condicionales",
        title: "Condicionales 1 i 2",
        category: "zdania zlozone",
        shortRule:
          "Condicional 1 opisuje realny warunek, a condicional 2 sytuacje hipotetyczna.",
        patterns: [
          "Condicional 1: si + presente, futuro / imperativo / presente",
          "Condicional 2: si + imperfecto de subjuntivo, condicional",
        ],
        examples: [
          "Si tenemos tiempo, prepararemos otra oferta.",
          "Si quieres participar, introduce tus datos online.",
          "Si el cliente acepta el precio, firmamos el contrato.",
          "Si tuviera mas dinero, montaria un negocio.",
          "Si fuera tu, pediria un ascenso.",
          "Si el proveedor bajara el precio, comprariamos mas.",
        ],
        traps: [
          "Po si w realnym warunku nie uzywamy futuro: Si tendremos tiempo jest bledne.",
          "Si tengo dinero, invertire = realne; Si tuviera dinero, invertiria = hipotetyczne.",
        ],
        miniExercise: [
          {
            prompt: "Si el cliente ___ (aceptar) la oferta, firmaremos el contrato.",
            answer: "acepta",
            explanation:
              "Realny warunek: si + presente, potem futuro.",
          },
          {
            prompt: "Si yo ___ (ser) gerente, cambiaria el horario.",
            answer: "fuera",
            explanation:
              "Hipoteza wymaga imperfecto de subjuntivo: fuera.",
          },
          {
            prompt: "Si tenemos mas muestras, las ___ (repartir) en la feria.",
            answer: "repartiremos",
            explanation:
              "Realny warunek moze laczyc presente po si z futuro w drugiej czesci.",
          },
          {
            prompt:
              "Si la empresa ___ (tener) mas presupuesto, contrataria personal.",
            answer: "tuviera",
            explanation:
              "Contrataria wskazuje condicional 2, wiec po si: tuviera.",
          },
        ],
      },

      {
        id: "estilo-indirecto",
        title: "Estilo indirecto",
        category: "mowa zalezna",
        shortRule:
          "Uzywaj, gdy przekazujesz czyjes slowa; po czasowniku w przeszlosci czesto cofasz czas.",
        patterns: [
          "presente -> imperfecto: Trabajo aqui -> dijo que trabajaba alli",
          "pretérito perfecto -> pluscuamperfecto: He enviado -> dijo que habia enviado",
          "futuro -> condicional: Llamare -> dijo que llamaria",
          "imperativo -> que + subjuntivo: Envia -> pidio que enviara",
          "hoy -> ese dia, manana -> al dia siguiente, ayer -> el dia anterior",
        ],
        examples: [
          "Ana dijo: Estoy ocupada. -> Ana dijo que estaba ocupada.",
          "El cliente dijo: No he recibido la entrega. -> Dijo que no habia recibido la entrega.",
          "El gerente dijo: Revisaremos el presupuesto. -> Dijo que revisarian el presupuesto.",
          "La directora me dijo: No interrumpas. -> Me pidio que no interrumpiera.",
          "El proveedor dijo: Puedo hacer un descuento. -> Dijo que podia hacer un descuento.",
        ],
        traps: [
          "W mowie zaleznej zmieniasz tez wskazniki czasu i miejsca.",
          "Rozkaz po pidio que wymaga subjuntivo, najczesciej imperfecto de subjuntivo.",
        ],
        miniExercise: [
          {
            prompt: 'Marta: "Necesito mas tiempo." -> Marta dijo que ___.',
            answer: "necesitaba mas tiempo",
            explanation:
              "Presente necesito cofa sie do imperfecto: necesitaba.",
          },
          {
            prompt: 'El jefe: "Envia el informe." -> El jefe me pidio que ___.',
            answer: "enviara el informe",
            explanation:
              "Imperativo w mowie zaleznej przechodzi w que + imperfecto de subjuntivo.",
          },
          {
            prompt: 'El cliente: "No he pagado." -> El cliente dijo que ___.',
            answer: "no habia pagado",
            explanation:
              "Pretérito perfecto cofa sie do pluscuamperfecto.",
          },
          {
            prompt: 'Ana: "Llamare manana." -> Ana dijo que ___.',
            answer: "llamaria al dia siguiente",
            explanation:
              "Futuro przechodzi w condicional, a manana w al dia siguiente.",
          },
        ],
      },

      {
        id: "funciones-orales",
        title: "Funkcje jezykowe na egzamin ustny",
        category: "komunikacja",
        shortRule:
          "Gotowe struktury pomagaja wyrazac opinie, emocje, prosic o pozwolenie, doradzac, zgadzac sie i negocjowac.",
        patterns: [
          "Opinia: creo que, en mi opinion, desde mi punto de vista, no pienso que + subjuntivo",
          "Emocje: me alegra que, me sorprende que, me molesto que, es una pena que",
          "Pozwolenie: ¿Te importa que...?, ¿Le importa que...?, ¿Puedo...?",
          "Rada: Yo que tu..., Si fuera tu..., Lo mejor es que..., Es importante que...",
          "Negocjacje: ¿Podria hacerme un descuento?, Podemos aceptar si..., Trato hecho.",
        ],
        examples: [
          "Creo que el teletrabajo mejora la conciliacion.",
          "No pienso que la reunion sea necesaria.",
          "Me alegra que hayas encontrado trabajo.",
          "¿Le importa que use la sala de reuniones?",
          "Si fuera tu, hablaria con recursos humanos.",
          "Podemos aceptar el precio si incluye el transporte.",
        ],
        traps: [
          "Po no pienso que, me alegra que, es una pena que czesto pojawia sie subjuntivo.",
          "W negocjacjach warto laczyc zgode z warunkiem: Podemos aceptar si...",
        ],
        miniExercise: [],
      },
    ],

    examTasks: [
      {
        id: "A",
        title: "A. Czasy przeszle",
        type: "gap-fill",
        instructions: "Uzupelnij forma czasownika.",
        items: [
          {
            prompt:
              "El ano pasado, mientras yo ___ (trabajar) en marketing, la empresa ___ (lanzar) su producto estrella.",
            answer: "trabajaba / lanzo",
            explanation:
              "Mientras wprowadza tlo w imperfecto; lanzamiento jest zakonczona akcja w indefinido.",
          },
          {
            prompt:
              "Ayer, cuando la directora ___ (presentar) el balance, se ___ (cortar) la conexion.",
            answer: "presentaba / corto",
            acceptedAnswers: ["presento / corto"],
            explanation:
              "Presentaba opisuje trwajace tlo, a se corto punktowe zdarzenie. Presento tez jest mozliwe, gdy prezentacja jest traktowana jako zakonczona akcja.",
          },
          {
            prompt:
              "En mi antiguo empleo nosotros ___ (tener) reuniones todos los lunes.",
            answer: "teniamos",
            explanation:
              "Todos los lunes w przeszlosci opisuje zwyczaj, wiec imperfecto.",
          },
          {
            prompt: "Cuando llegue, el gerente ya ___ (salir).",
            answer: "habia salido",
            explanation:
              "Wyjscie nastapilo przed moim przyjsciem, wiec pluscuamperfecto.",
          },
          {
            prompt: "La semana pasada los jefes ___ (asistir) a un congreso.",
            answer: "asistieron",
            explanation:
              "La semana pasada to zamkniety czas, dlatego indefinido.",
          },
          {
            prompt:
              "Como compras no ___ (aprobar) el presupuesto, perdimos una oportunidad.",
            answer: "habia aprobado",
            acceptedAnswers: ["aprobo"],
            explanation:
              "Habia aprobado podkresla, ze decyzja budzetowa byla wczesniejsza niz utrata okazji. Aprobo jest mozliwe jako proste wydarzenie w sekwencji.",
          },
        ],
      },
      {
        id: "B",
        title: "B. Subjuntivo czy indicativo",
        type: "multiple-choice",
        instructions: "Wybierz poprawna forme.",
        items: [
          {
            prompt: "Busco una oficina que ___ luminosa.",
            options: ["es", "sea", "esta"],
            answer: "sea",
            explanation:
              "Szukana oficina nie jest konkretna, dlatego subjuntivo.",
          },
          {
            prompt: "Conozco una oficina que ___ garaje.",
            options: ["tenga", "tiene", "haya tenido"],
            answer: "tiene",
            explanation:
              "Conozco oznacza, ze biuro jest konkretne i znane, wiec indicativo.",
          },
          {
            prompt: "No hay nadie que ___ la verdad.",
            options: ["sabe", "sepa", "supo"],
            answer: "sepa",
            explanation:
              "Po no hay nadie que uzywamy subjuntivo.",
          },
          {
            prompt: "No tengo dudas de que ___ razon.",
            options: ["tienes", "tengas", "tendrias"],
            answer: "tienes",
            explanation:
              "Brak watpliwosci oznacza pewnosc, wiec indicativo.",
          },
          {
            prompt: "Tengo dudas de que ___ razon.",
            options: ["tienes", "tengas", "tenias"],
            answer: "tengas",
            explanation:
              "Tengo dudas de que wyraza watpliwosc, wiec subjuntivo.",
          },
          {
            prompt: "Te llamare en cuanto ___ tiempo.",
            options: ["tengo", "tenga", "tendre"],
            answer: "tenga",
            explanation:
              "En cuanto z przyszlym znaczeniem wymaga subjuntivo.",
          },
          {
            prompt: "Cuando ___ pequeno, fui a Mallorca.",
            options: ["soy", "sea", "era"],
            answer: "era",
            explanation:
              "Chodzi o opis stanu w przeszlosci, dlatego imperfecto.",
          },
          {
            prompt: "Hasta que ___ el jefe, no empezamos.",
            options: ["llega", "llegue", "llego"],
            answer: "llegue",
            explanation:
              "Hasta que z przyszlym/oczekiwanym wydarzeniem wymaga subjuntivo.",
          },
        ],
      },
      {
        id: "C",
        title: "C. Peryfrazy",
        type: "multiple-choice",
        instructions: "Wybierz A/B/C.",
        items: [
          {
            prompt: "El gerente no esta; ___ a una reunion hace un minuto.",
            options: ["vuelve a salir", "empieza a salir", "acaba de salir"],
            answer: "acaba de salir",
            explanation:
              "Hace un minuto oznacza 'dopiero co', czyli acabar de + infinitivo.",
          },
          {
            prompt: "El sistema rechazo el informe, asi que tengo que ___.",
            options: [
              "volver a redactarlo",
              "seguir redactandolo",
              "acabar de redactarlo",
            ],
            answer: "volver a redactarlo",
            explanation:
              "Raport zostal odrzucony, wiec trzeba napisac go ponownie.",
          },
          {
            prompt: "A pesar de los recortes, nosotros ___ con calidad.",
            options: [
              "empezamos a trabajar",
              "seguimos trabajando",
              "volvemos a trabajar",
            ],
            answer: "seguimos trabajando",
            explanation:
              "A pesar de los recortes podkresla kontynuacje mimo trudnosci.",
          },
          {
            prompt:
              "Despues de meses, el equipo por fin ___ la nueva interfaz.",
            options: [
              "sigue disenando",
              "ha empezado a disenar",
              "acaba de disenar",
            ],
            answer: "ha empezado a disenar",
            explanation:
              "Despues de meses i por fin wskazuja rozpoczecie dzialania po dlugim czasie.",
          },
        ],
      },
      {
        id: "D",
        title: "D. Imperativo",
        type: "gap-fill",
        instructions: "Uzupelnij.",
        items: [
          {
            prompt: "Julio, ___ (venir) un momento.",
            answer: "ven",
            explanation: "Venir ma nieregularna forme tu: ven.",
          },
          {
            prompt: "Chicos, ___ (ser) amables.",
            answer: "sed",
            explanation: "Ser w vosotros: sed.",
          },
          {
            prompt: "___ (salir, ustedes) de la oficina.",
            answer: "salgan",
            explanation: "Ustedes: salgan.",
          },
          {
            prompt: "Antonio, ___ (poner) los libros ahi.",
            answer: "pon",
            explanation: "Poner ma nieregularna forme tu: pon.",
          },
          {
            prompt: "No ___ (interrumpir, tu) al cliente.",
            answer: "interrumpas",
            explanation: "Negativo tu tworzy sie jak subjuntivo.",
          },
          {
            prompt: "___ (leer, vosotros) esta novela.",
            answer: "leed",
            explanation: "Imperativo afirmativo vosotros od leer to leed.",
          },
        ],
      },
      {
        id: "E",
        title: "E. Condicionales",
        type: "gap-fill",
        instructions: "Uzupelnij.",
        items: [
          {
            prompt:
              "Si la empresa ___ (tener) mas presupuesto, contrataria personal.",
            answer: "tuviera",
            explanation: "Contrataria wskazuje condicional 2.",
          },
          {
            prompt: "Si aceptas la oferta, nosotros ___ (firmar) el contrato.",
            answer: "firmaremos",
            explanation: "Realny warunek: si + presente, potem futuro.",
          },
          {
            prompt: "Si yo ___ (ser) tu, pediria una subvencion.",
            answer: "fuera",
            explanation: "Si fuera tu to standardowa konstrukcja hipotetyczna.",
          },
          {
            prompt: "Si hay un descuento, ___ (comprar, nosotros) mas mercancia.",
            answer: "compraremos",
            explanation: "Realny warunek z przyszlym skutkiem.",
          },
        ],
      },
      {
        id: "F",
        title: "F. Zaimki",
        type: "gap-fill",
        instructions: "Zastap wyrazenia zaimkami.",
        items: [
          {
            prompt: "Envie el informe al jefe. -> ___ ___ envie.",
            answer: "Se lo",
            explanation: "Al jefe = le, el informe = lo; le + lo -> se lo.",
          },
          {
            prompt: "Compre las muestras para los clientes. -> ___ ___ compre.",
            answer: "Se las",
            explanation:
              "Para los clientes = les, las muestras = las; les + las -> se las.",
          },
          {
            prompt:
              "La secretaria explico el procedimiento a nosotros. -> ___ ___ explico.",
            answer: "Nos lo",
            explanation:
              "A nosotros = nos, el procedimiento = lo; razem nos lo.",
          },
          {
            prompt: "Voy a mandar el catalogo a Ana. -> Voy a ___.",
            answer: "mandarselo",
            explanation:
              "A Ana = se, el catalogo = lo; przy bezokoliczniku doklejamy zaimki.",
          },
        ],
      },
      {
        id: "G",
        title: "G. Estilo indirecto",
        type: "gap-fill",
        instructions: "Przeksztalc.",
        items: [
          {
            prompt: 'Ana: "Estoy de baja." -> Ana dijo que ___.',
            answer: "estaba de baja",
            explanation: "Estoy cofa sie do imperfecto: estaba.",
          },
          {
            prompt:
              'El cliente: "No he recibido el pedido." -> El cliente dijo que ___.',
            answer: "no habia recibido el pedido",
            explanation:
              "Pretérito perfecto cofa sie do pluscuamperfecto.",
          },
          {
            prompt: 'El jefe: "No interrumpas." -> El jefe me pidio que ___.',
            answer: "no interrumpiera",
            explanation:
              "Zakaz w mowie zaleznej po pidio que wymaga imperfecto de subjuntivo.",
          },
          {
            prompt: 'Marta: "Llamare manana." -> Marta dijo que ___.',
            answer: "llamaria al dia siguiente",
            explanation:
              "Futuro cofa sie do condicional, a manana do al dia siguiente.",
          },
        ],
      },
    ],

    gapFill: [
      {
        id: "gap-01",
        topicId: "subjuntivo-presente",
        prompt: "Busco una oficina que ___ luminosa y ___ garaje.",
        answer: "sea / tenga",
        explanation:
          "Szukana oficina nie jest konkretna, dlatego oba czasowniki ida w subjuntivo.",
      },
      {
        id: "gap-02",
        topicId: "subjuntivo-presente",
        prompt: "Conozco una empresa que ___ una filial en Brasil.",
        answer: "tiene",
        explanation:
          "Conozco oznacza konkretna, znana firme, wiec indicativo.",
      },
      {
        id: "gap-03",
        topicId: "subjuntivo-presente",
        prompt: "No hay nadie que ___ toda la verdad.",
        answer: "sepa",
        explanation:
          "Po no hay nadie que uzywamy subjuntivo.",
      },
      {
        id: "gap-04",
        topicId: "futuro-simple",
        prompt: "Te llamare en cuanto ___ tiempo.",
        answer: "tenga",
        explanation:
          "En cuanto z przyszlym znaczeniem wymaga presente de subjuntivo.",
      },
      {
        id: "gap-05",
        topicId: "futuro-simple",
        prompt: "Cuando ___ tiempo, preparare la oferta.",
        answer: "tenga",
        explanation:
          "Po cuando w zdaniu przyszlym dajemy subjuntivo.",
      },
      {
        id: "gap-06",
        topicId: "preterito-imperfecto",
        prompt: "Cuando ___ tiempo, hacia balance personal.",
        answer: "tenia",
        explanation:
          "To zwyczaj w przeszlosci, dlatego imperfecto.",
      },
      {
        id: "gap-07",
        topicId: "subjuntivo-imperfecto",
        prompt: "Me sorprendio que ellos ___ tan hospitalarios.",
        answer: "fueran",
        explanation:
          "Reakcja w przeszlosci po que wymaga imperfecto de subjuntivo.",
      },
      {
        id: "gap-08",
        topicId: "subjuntivo-presente",
        prompt: "Es importante que ___ la informacion antes de enviarla.",
        answer: "compruebes",
        explanation:
          "Es importante que uruchamia subjuntivo.",
      },
      {
        id: "gap-09",
        topicId: "condicionales",
        prompt: "Si ___ tu, pediria una subvencion.",
        answer: "fuera",
        explanation:
          "Hipotetyczny warunek: si + imperfecto de subjuntivo.",
      },
      {
        id: "gap-10",
        topicId: "condicionales",
        prompt: "Si aceptas el precio, ___ el contrato.",
        answer: "firmaremos",
        explanation:
          "Realny warunek laczy si + presente z futuro.",
      },
      {
        id: "gap-11",
        topicId: "perifrasis-verbales",
        prompt: "El gerente ___ de salir.",
        answer: "acaba",
        explanation:
          "Acabar de + infinitivo oznacza, ze cos wydarzylo sie przed chwila.",
      },
      {
        id: "gap-12",
        topicId: "perifrasis-verbales",
        prompt: "Tenemos que ___ a redactar el informe.",
        answer: "volver",
        explanation:
          "Volver a + infinitivo oznacza powtorzenie czynnosci.",
      },
      {
        id: "gap-13",
        topicId: "perifrasis-verbales",
        prompt: "___ trabajando con los mismos proveedores.",
        answer: "Seguimos",
        explanation:
          "Seguir + gerundio oznacza kontynuacje.",
      },
      {
        id: "gap-14",
        topicId: "perifrasis-verbales",
        prompt: "___ dos anos estudiando espanol.",
        answer: "Llevo",
        explanation:
          "Llevar + okres + gerundio mowi, od jak dawna trwa czynnosc.",
      },
      {
        id: "gap-15",
        topicId: "imperativo",
        prompt: "No ___ al cliente.",
        answer: "interrumpas",
        explanation:
          "Imperativo negativo tu tworzy sie jak subjuntivo.",
      },
      {
        id: "gap-16",
        topicId: "pronombres-objeto",
        prompt: "Envie el informe al jefe: ___ ___ envie.",
        answer: "se lo",
        explanation:
          "Al jefe = le, el informe = lo; le + lo zmienia sie w se lo.",
      },
      {
        id: "gap-17",
        topicId: "estilo-indirecto",
        prompt: "El cliente dijo que no ___ recibido el pedido.",
        answer: "habia",
        explanation:
          "W mowie zaleznej he recibido cofa sie do habia recibido.",
      },
      {
        id: "gap-18",
        topicId: "condicional-simple",
        prompt: "Me ___ montar un negocio sostenible.",
        answer: "gustaria",
        explanation:
          "Me gustaria to uprzejma forma wyrazenia pragnienia w condicional.",
      },
      {
        id: "gap-19",
        topicId: "que-cual",
        prompt: "¿___ producto quieres presentar en la feria?",
        answer: "Que",
        explanation:
          "Przed rzeczownikiem producto stosujemy que.",
      },
      {
        id: "gap-20",
        topicId: "indefinidos",
        prompt: "No tengo ___ problema con el horario.",
        answer: "ningun",
        explanation:
          "Przed meskim rzeczownikiem pojedynczym ninguno skraca sie do ningun.",
      },
    ],

    oralFunctions: [
      {
        id: "opinion",
        title: "Wyrazanie opinii",
        phrases: [
          "Creo que el teletrabajo mejora la conciliacion.",
          "En mi opinion, una buena publicidad es esencial.",
          "Desde mi punto de vista, la empresa debe innovar.",
          "No pienso que la reunion sea necesaria.",
        ],
      },
      {
        id: "emociones",
        title: "Reagowanie emocjonalne",
        phrases: [
          "Me alegra que hayas encontrado trabajo.",
          "Me sorprende que la empresa sea tan flexible.",
          "Me molesto que interrumpieran la reunion.",
          "Es una pena que no haya mas presupuesto.",
        ],
      },
      {
        id: "permiso",
        title: "Prosba o pozwolenie",
        phrases: [
          "¿Te importa que abra la ventana?",
          "¿Le importa que use la sala de reuniones?",
          "¿Puedo hacer una pregunta?",
          "Claro, adelante.",
          "Lo siento, pero ahora no es posible.",
        ],
      },
      {
        id: "consejos",
        title: "Rady",
        phrases: [
          "Yo que tu prepararia un plan de carrera.",
          "Si fuera tu, hablaria con recursos humanos.",
          "Lo mejor es que compruebes la informacion.",
          "Es importante que escuches a la otra parte.",
        ],
      },
      {
        id: "acuerdo",
        title: "Zgoda i niezgoda",
        phrases: [
          "Estoy de acuerdo.",
          "Totalmente de acuerdo.",
          "No estoy de acuerdo porque...",
          "Entiendo tu punto de vista, pero...",
          "Trato hecho.",
        ],
      },
      {
        id: "negociaciones",
        title: "Negocjacje",
        phrases: [
          "¿Podria hacerme un descuento?",
          "Nos parece demasiado caro.",
          "Podemos aceptar el precio si incluye el transporte.",
          "Necesitamos una solucion flexible.",
          "Dejemos la decision al gerente.",
        ],
      },
    ],

    finalReview: [
      "Busco una oficina que sea luminosa y tenga garaje.",
      "Conozco una empresa que tiene una filial en Brasil.",
      "No hay nadie que sepa toda la verdad.",
      "Te llamare en cuanto tenga tiempo.",
      "Cuando tengo tiempo, hago balance personal.",
      "Cuando tenga tiempo, preparare la oferta.",
      "Me sorprendio que fueran tan hospitalarios.",
      "Es importante que compruebes la informacion.",
      "Si fuera tu, pediria una subvencion.",
      "Si aceptas el precio, firmaremos el contrato.",
      "El gerente acaba de salir.",
      "Tenemos que volver a redactar el informe.",
      "Seguimos trabajando con los mismos proveedores.",
      "Llevo dos anos estudiando espanol.",
      "No interrumpas al cliente.",
      "Envie el informe al jefe: se lo envie.",
      "El cliente dijo que no habia recibido el pedido.",
      "Me gustaria montar un negocio sostenible.",
      "Estoy totalmente de acuerdo con la propuesta.",
      "Trato hecho.",
    ],
  };
})();
