# Operacje na listach

## Wprowadzenie

Wielokrotnie korzystaliśmy już z tablic na zajęciach. Wykonywaliśmy też na nich proste operacje. Przypomnijmy:

```python
cyfry = [12,13,4,341,1,2]

cyfry.append(4) # doda element na koniec tablicy
cyfry.pop() # usuwa ostatni element, lub o indeksie podanym w nawiasach
cyfry.insert(0, 31) # doda element (argument 2) na pozycję podaną w argumencie 1
cyfry.remove(12) # usunie podany element
```

Jednak, operując na większych zbiorach danych, będziemy potrzebować bardziej zaawansowanych funkcji.

## Co to jest iterator

Przy każdej z tych funkcji, spotkacie się z pojęciem iteratora. Na razie musicie wiedzieć, że to jest grupa elementów, po których można iterować, czyli np. przejść po nich pętlą for. Najprostszym jego przykładem jest `range()` stosowany w pętli for.

Na ten moment iteratory zwracane przez te funkcje będziemy po prostu konwertować na listę używając `list()`, także nie musicie się nimi za bardzo przejmować

## filter()

Funkcja filter() zwraca nowy iterator, który zawiera wybrane przez nas elementy.

Konkretniej, w pierwszym argumencie podajemy funkcję, która przyjmuje w argumencie jeden element z naszej listy, a zwraca boolean (najczęściej warunek, którym sprawdzamy, czy element spełnia nasze kryteria). W drugim argumencie przyjmuje ona kolekcję.

Działanie tej funkcji wygląda następująco:

1. Wywołuje ona funkcję podaną przez nas na każdym elemencie w kolekcji
2. Kiedy nasza funkcja zwróci `true`, element zostanie dodany do nowej kolekcji, w przeciwnym wypadku zostanie pominięty.
3. Zwraca nową kolekcję z obiektami spełniającymi warunek w podanej przez nas funkcji

Zobaczmy to na przykładzie:

```python
imiona = ["Ala", "Mateusz", "Artur", "Antonii", "Jan", "Kacper"]

def filtrowanie(imie): # funkcja filtrująca
    return imie.startswith("A")

imionaNaA = list(filter(filtrowanie, imiona))

print(imiona)
print(imionaNaA)
```

Na starcie mamy kolekcję różnych imion. Niżej tworzymy funkcję, która przyjmuje jeden argument i zwraca wynik działania `imie.startswith("A")`, czyli boolean. Później tworzymy kolekcję `imionaNaA` i przypisujemy do niej wynik funkcji filter(). Dzięki temu nasza kolekcja będzie zawierać tylko imiona zaczynające się na "A".

Ta funkcja zajmuje dość dużo miejsca. Spróbujmy użyć do tego funkcji lambda.

```python
imiona = ["Ala", "Mateusz", "Artur", "Antonii", "Jan", "Kacper"]

filtrowanie = lambda imie: imie.startswith("A") # funkcja lambda

imionaNaA = list(filter(filtrowanie, imiona))

print(imiona)
print(imionaNaA)
```

Trochę lepiej. Uprośćmy to jednak jeszcze bardziej

```python
imiona = ["Ala", "Mateusz", "Artur", "Antonii", "Jan", "Kacper"]

imionaNaA = list(filter(lambda imie: imie.startswith("A"), imiona))

print(imiona)
print(imionaNaA)
```

Idealnie. Teraz nasz kod zmieścił się tak naprawdę w jednej linijce. Możecie na początek sobie zapamiętać zapis:

### Prosty zapis

```python
nowaKolekcja = list(filter(lambda element: warunek, kolekcja))
```

- **`nowaKolekcja`** to jest kolekcja zwracana przez funkcję filter
- **`element`** to jest pojedynczy element kolekcji
- **`warunek`** to jest warunek, kiedy będziemy chcieli wrzucić element do kolekcji
- **`kolekcja`** to jest kolekcja, którą chcemy przefiltrować

## map()

Funkcja map() na pierwszy rzut oka działa w bardzo podobny sposób do filter(). Także przyjmuje w pierwszym argumencie
funkcję, a w drugim kolekcję, na której chcemy działać. I tak samo jak filter() zwraca nowy iterator.

Istotna różnica jest taka, że filter() wybierał elementy z kolekcji, a map() wykona na nich daną operację i wrzuci do nowej kolekcji elementy zwrócone przez funkcję.

Działanie tej funkcji wygląda następująco:

1. Wywołuje ona funkcję podaną przez nas na każdym elemencie kolekcji.
2. Dodaje do kolekcji element zwrócony przez naszą funkcję
3. Zwraca nową kolekcję z elementami zwróconymi przez naszą funkcję

Znowu, zobaczmy to na przykładzie:

```python
liczby = [2, 3, 4, 5, 6, 7, 8]

podwojone = list(map(lambda liczba: liczba * 2, liczby));

print(podwojone); # [4, 6, 8, 10, 12, 14, 16]
```

Utworzyłem na start kolekcję liczb. Później tworzę nową kolekcję o nazwie podwojone do której przypisuję
listę. W tej liście znajdować się będą elementy zwrócone przez map(). W map() podałem funkcję, która zwraca liczbę pomnożoną przez 2 (pamiętamy działanie funkcji lambda), a także kolekcję liczby, na której będę działał.

### map() vs for

Ten sam wynik możemy osiągnąć za pomocą pętli for

```python
liczby = [2, 3, 4, 5, 6, 7, 8]

podwojone = []

for liczba in liczby:
    podwojone.append(liczba * 2)

print(podwojone)
```

Ten program zwróci nam dokładnie to samo. Jednak zapis z map() jest krótszy i bardziej czytelny.

### Prosty zapis

```python
nowaKolekcja = list(map(lambda element: elementPoZmianie, kolekcja))
```

- **`nowaKolekcja`** to jest kolekcja zwracana przez funkcję map()
- **`element`** to jest pojedynczy element kolekcji
- **`elementPoZmianie`** to jest element, który będzie wrzucony do nowej kolekcji
- **`kolekcja`** to jest kolekcja, którą chcemy przefiltrować
