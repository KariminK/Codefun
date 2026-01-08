# Metody

Właściwością obiektu nie musi być tylko liczba, tekst, czy true lub false. Może być to także funkcja.

## Czym jest metoda?

Właściwością obiektu nie musi być tylko liczba, tekst, czy true lub false. Może być to także funkcja. I tym właśnie jest metoda. **Metodą, nazywamy funkcję, która jest przypisana do klasy**.

## Po co istnieją metody?

Posługując się dalej przykładem z samochodami, wyobraźmy sobie, że chcemy w wygodny sposób wyświetlić informacje o naszym samochodzie.
Do tej pory zrobilibyśmy to w ten sposób:

```python
class Pojazd:
    marka = "BMW"
    model = "E36"
    rok_produkcji = 2024
    przebieg = 7000

pojazd1 = Pojazd()

print(f"Marka: {pojazd1.marka}")
print(f"Model: {pojazd1.model}")
print(f"Rok produkcji: {pojazd1.rok_produkcji}")
print(f"Przebieg: {pojazd1.przebieg}")
```

I wszystko działa jak chcemy. Jednak, co jeśli byśmy mieli drugi pojazd? Musielibyśmy napisać dla niego dodatkowe cztery linijki identycznego kodu. I w tym miejscu przyda nam się metoda.

## Jak tworzyć metody?

W pythonie metody tworzymy tak jak zwykłą funkcję, tylko musi być ona w obrębie klasy i mieć argument self (o którym zaraz). Dopiszmy do naszej klasy metodę, która wyświetli informacje o tym pojeździe.

```python
class Pojazd:
    marka = "BMW"
    model = "E36"
    rok_produkcji = 2024
    przebieg = 7000
    def wyswietlInfo(self):
        print(f"Marka: {self.marka}")
        print(f"Model: {self.model}")
        print(f"Rok produkcji: {self.rok_produkcji}")
        print(f"Przebieg: {self.przebieg}")
```

Teraz możemy ją wywołać dla naszego pojazdu:

```python
pojazd1 = Pojazd()
pojazd1.wyswietlInfo()
```

I wynik w konsoli będzie taki sam co wcześniej.

## Czym jest _self_?

_self_ w pythonie oznacza po prostu dany obiekt tej klasy.
Utwórzmy sobie więcej pojazdów:

```python
pojazd1 = Pojazd()
pojazd1.wyswietlInfo()

pojazd2 = Pojazd()
pojazd2.marka = "Jeep"
pojazd2.model = "Wrangler"
pojazd2.wyswietlInfo()

pojazd3 = Pojazd()
pojazd3.marka = "Lamborghini"
pojazd3.model = "Aventador"
pojazd3.wyswietlInfo()
```

_self_ w każdym z tych trzech przypadków przybrało postać danego obiektu:

- W pierwszym, _self_ to tak naprawdę _pojazd1_
- W drugim, _self_ to tak naprawdę _pojazd2_
- W trzecim, _self_ to tak naprawdę _pojazd3_

Czyli wniosek jest taki, że **_self_ w metodzie wskazuje na obiekt wywołujący ją**
