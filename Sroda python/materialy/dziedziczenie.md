# Dziedziczenie

## Czym jest dziedziczenie?

Wyobraźmy sobie psa. Ten pies ma jakieś podstawowe cechy (np. wzrost, waga, wiek). Teraz wyobraźmy sobie dalmatyńczyka. Ten dalmatyńczyk ma wszystkie cechy psa, a dodatkowo np. swoje umiejętności i specyficzne cechy. W programowaniu, nazwiemy to tak, że dalmatyńczyk dziedziczy cechy psa.

Czyli **dziedziczenie to pobieranie cech z klasy przez inną klasę**.

## Co to jest klasa bazowa i klasa pochodna

Klasa bazowa, to **klasa, od której dziedziczymy właściwości**

Klasa pochodona, to **klasa, która dziedziczy właściwości**

Czyli, posługując się wcześniejszym przykładem, Pies to będzie **klasa bazowa**, a Dalmatynczyk to będzie **klasa pochodna**

## Jak wygląda dziedziczenie w pythonie?

Przy tworzeniu klasy, podajemy nawiasy, a w nich nazwe klasy, od której chcemy dziedziczyć. I gotowe! W naszej klasie pochodnej możemy używać właściwości z klasy bazowej.

```python
class Pies:
    def __init__(self, imie, wiek):
        self.imie = imie
        self.wiek = wiek

    def przedstawSie(self):
        print(f"Jestem {self.imie} i mam {self.wiek} lat")

class Dalmatynczyk(Pies):
    def __init__(self, imie, wiek, umaszczenie):
        self.imie = imie
        self.wiek = wiek
        self.umaszczenie = umaszczenie

azor = Pies("Azor", 13)
burek = Dalmatynczyk("Burek", 67, "biala")

azor.przedstawSie()
burek.przedstawSie()
```

W powyższym przykładzie, mamy dwie klasy Pies i Dalmatynczyk. Dalmatynczyk dziedziczy wszystkie właściwości od klasy Pies. Dzięki temu na obu obiektach możemy wywołać metodę *przedstawSie*
