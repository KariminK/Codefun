# Moduły

Do tej pory w naszych tworzyliśmy jeden plik _main.py_ w którym pisaliśmy nasz cały kod. W mniejszych projektach jest to wystarczające, jednak kiedy kod staje się coraz bardziej rozbudowany, jest to wtedy nieczytelne. Wtedy nadchodzi moment, żeby podzielić ten kod na moduły

## Czym są moduły?

Moduły to fragmenty kodu takie jak funkcja czy klasa, które znajdują się w innym pliku.

## Jak importować moduły?

Utwórzmy plik _osoba.py_, w którym utworzymy klasę _Osoba_

```python
class Osoba:
    def __init__(self, _imie, _nazwisko):
        self.imie = _imie
        self.nazwisko = _nazwisko
```

I teraz, w głównym pliku _main.py_ importujemy klasę _Osoba_ z pliku _osoba.py_:

```python
from osoba import Osoba

osoba1 = Osoba("Jan", "Kowalski")
```

I teraz możemy używać klasy _Osoba_ tak samo, jakby była ona w pliku głównym _main.py_

## Jak importować cały plik naraz

W jednym pliku możemy mieć kilka różnych klas czy funkcji. W powyższym przykładzie zaimportowaliśmy tylko klasę _Osoba_ z pliku _osoba.py_. Jednak, w razie potrzeby, możemy zaimportować cały plik. Wtedy po prostu używamy _import from ..._

Stwórzmy teraz plik _zwierzeta.py_, w którym stworzymy trzy klasy.

```python
class Ptak:
    __init__(self, _gatunek, _lotny):
        self.gatunek = _gatunek
        self.czyLotny = _lotny

class Pies:
    __init__(self, _rasa, _wiek):
        self.rasa = _rasa
        self.wiek = _wiek

class Zolw:
    __init__(self, _wiek, _predkosc):
        self.wiek = _wiek
        self.predkosc = _predkosc
```

I teraz, w pliku _main.py_ zaimportujmy cały plik _zwierzeta.py_.

```python
import zwierzeta

ptaszek = zwierzeta.Ptak("Wróbel", True)
piesek = zwierzeta.Pies("Dalmatyńczyk", 5)
zolwik = zwierzeta.Zolw(6, 7)

```

I gotowe! Teraz możemy używać wszystkich klas z pliku _zwierzeta.py_
