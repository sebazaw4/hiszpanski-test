# Prosta aplikacja do nauki hiszpańskiego

To jest mała, lokalna aplikacja do nauki materiału z hiszpańskiego B1. Działa offline jako jeden plik HTML.

## Jak uruchomić

Otwórz plik `index.html` dwuklikiem w przeglądarce.

Nie trzeba nic instalować. Nie trzeba uruchamiać serwera. Aplikacja zapisuje postęp lokalnie w przeglądarce.

## Co zawiera

- **Fiszki** - słownictwo biznesowe hiszpański ⇄ polski.
- **Carta formal** - zwroty do listu formalnego: powitanie, powód listu, treść, prośby, zakończenie.
- **Czasowniki** - lista czasowników biznesowych i krótkie odpytywanie.
- **Imperfecto de subjuntivo** - zasady, końcówki, formy nieregularne i mini-test.
- **Es esencial que...** - zwroty typu `es esencial que`, `es importante que`, `es necesario que` oraz ćwiczenia z subjuntivo.

## Jak się uczyć

1. Zacznij od sekcji **Fiszki**.
2. Oznaczaj słowa jako `znam` albo `trudne`.
3. Wracaj do trudnych fiszek, bo aplikacja częściej je pokazuje.
4. Przejdź do **Czasowniki** i ćwicz wpisywanie form po hiszpańsku.
5. Na koniec rób mini-testy w sekcjach **Imperfecto** i **Es esencial que...**.

## Źródła materiałów

Aplikacja korzysta z głównych plików z tego folderu:

- `b1_4sem_u8repaso.docx`
- `b1_4sem_u8repaso2.docx`
- `Reglas para escribir una Carta Formal (B1 - Negocios).md`

Folder `starsze` nie jest używany w pierwszej wersji.

## Postęp

Postęp jest zapisywany w pamięci przeglądarki (`localStorage`):

- znane fiszki,
- trudne fiszki,
- ostatnio otwarta sekcja,
- wyniki krótkich quizów.

Jeśli otworzysz aplikację w innej przeglądarce albo wyczyścisz dane strony, postęp może zniknąć.
