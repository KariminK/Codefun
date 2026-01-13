# Konstruktor \_\_\_init\_\_\_

## Co to jest konstruktor?

Konstruktor to specjalna metoda (funkcja), która wywołuje się przy tworzeniu obiektu klasy. Domyślnie nie robi zbyt dużo, ale my możemy do niej dodać swoją funkcjonalność. Najczęściej będziemy go używać do "wkładania" danych do obiektu.

## Jak stworzyć konstruktor

Konstruktor w pythonie tworzymy poprzez stworzenie metody o nazwie \_\_init\_\_. Jest to metoda wbudowana w pythona. W argumencie musi przyjmujować omawiane wcześniej _self_, ale możemy dopisać także inne, dowolne argumenty.

```python
class Pojazd:
    def __init__(self, _marka, _model, _rok_produkcji):
        self.marka = _marka
        self.model = _model
        self.rok_produkcji = _rok_produkcji
```

Powyżej utworzyłem klasę _Pojazd_, która ma metodę \_\_\_init\_\_\_. Jest to właśnie konstruktor. W powyższym przykładzie "wrzuca" nam dane do tworzonego obiektu.

Warto zauważyć, że nie deklarowałem na sztywno żadnych wartości poza konstruktorem. Jest to dość częsty zabieg, który jest poprawny.

Kolejną rzeczą są podłogi (\_) przy argumentach funkcji. **Są one nie obowiązkowe**, jednak ta konwencja zwiększy nam czytelność naszego kodu.

## Jak wywołać konstruktor

Tak jak pisałem wcześniej, konstruktor to metoda, która wywołuje się przy tworzeniu obiektu. Mogliście wcześniej zauważyć, że tworzenie obiektu klasy przypomina trochę wywołanie funkcji. I poniekąd mieliście racje.

Nawiasy przy nazwie klasy wywołają nam konstruktor, tak jak nawiasy przy nazwie funkcji wywołają ją. Argumenty do konstruktora podajemy w tych właśnie nawiasach. Co ważne, pomijamy argument self, gdyż python sam uzupełni go za nas.

```python
pojazd1 = Pojazd("Audi", "A4", 2005)

print(pojazd1.marka) # W konsoli: Audi
```

W powyższym kodzie utworzyłem obiekt _pojazd1_ klasy _Pojazd_ i od razu wrzuciłem do niego potrzebne dane.
