# Klasy

Klasy to podstawowa część programowania obiektowego. Używa się ich w prawie wszystkich językach programowania.

## Co to jest obiekt?

Zanim powiemy sobie czym dokładnie jest klasa, musimy wiedzieć czym jest obiekt. W dużym skrócie obiekt to zbiór właściwości. W rzeczywistości obiektem jest wszystko co nas otacza. Tutaj posłużę się przykładem samochodów

## Po co nam klasy i obiekty?

Wyobraźmy sobie, że chcemy opisać samochód. Samochód ma swoją markę, model, a także rok produkcji i przebieg. Za pomocą zmiennych zrobilibyśmy to mniej więcej w ten sposób:

```python
marka = "Nissan"
model = "GT-R"
rok_produkcji = 2018
przebieg = 20000
```

Na razie wygląda to prosto, jednak co jeśli chcemy mieć dwa różne samochody? Przy użyciu samych zmiennych wyglądałoby to tak:

```python
samochod1_marka = "Nissan"
samochod1_model = "GT-R"
samochod1_rok_produkcji = 2018
samochod1_przebieg = 20000

samochod2_marka = "Toyota"
samochod2_model = "Supra"
samochod2_rok_produkcji = 2015
samochod2_przebieg = 70000
```

Jeśli byśmy mieli większy garaż i w nim na przykład 100 samochodów, to w kodzie stworzyłby się nam duży bałagan. Klasy pozwalają nam na rozwiązanie tego problemu i pogrupowanie danych w wygodny sposób.

## Co to jest klasa?

Klasa w pythonie (i nie tylko) to jest szablon, którego używamy do tworzenia obiektu. Analogicznie możemy ją nazwać fabryką samochodów, która może "wyprodukować" nam samochód o podanych przez nas parametrach. Taki wyprodukowany samochód będzie **obiektem**.

## Jak stworzyć klasę?

```python
class Pojazd:
    marka = "BMW"
    model = "E36"
    rok_produkcji = 2024
    przebieg = 7000
```

Wyżej utworzyłem **klasę** o nazwie Pojazd. Posiada ona cztery **właściwości**:

- Markę, która ma wartość "BMW"
- Model, który ma wartość "E36"
- rok_produkcji, który ma wartość 2024
- przebieg, który ma wartość 7000

Teraz mogę utworzyć obiekty na podstawie tej klasy:

```python
pojazd1 = Pojazd()
pojazd2 = Pojazd()
```

W naszym kodzie, pojazd1 i pojazd2 są **obiektami** na podstawie klasy **Pojazd**. Do ich właściwości możemy się dostać po kropce.

```python
print(pojazd1.marka) # w konsoli: BMW
print(pojazd2.marka) # w konsoli: BMW
```

Właściwości w obiektach zachowują się tak samo jak zmienne, co znaczy, że możemy także zmienić ich wartość:

```python
print(pojazd1.marka) # w konsoli: BMW
print(pojazd1.model) # w konsoli: E36

pojazd1.marka = "Audi"
pojazd1.model = "A4"

print(pojazd1.marka) # w konsoli: Audi
print(pojazd1.model) # w konsoli: A4

print(pojazd2.marka) # w konsoli: BMW
```

W kodzie powyżej zmieniliśmy markę i model pojazdowi 1, jednak pojazd 2 został bez zmian.
