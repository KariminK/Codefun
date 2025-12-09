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

Metoda filter() zwraca nowy iterator, który nie zawiera wybranych przez nas elementów.

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
