class Osoba:
    # Zróbcie konstruktor, który będzie miał dwa argumenty (oprócz self):
    # imie, nazwisko
    # niech przypisze je do obiektu (self.imie i self.nazwisko)
    def __init__(self, imie, nazwisko):
        self.imie = imie
        self.nazwisko = nazwisko
    def __str__(self):
        return f"Imię: {self.imie}, Nazwisko: {self.nazwisko}"


# Zrób obiekt o nazwie osoba1 klasy Osoba, która będzie mieć na imię
# Jan, a na nazwisko Kowalski
osoba1 = Osoba("Jan", "Kowalski")

# Wypisz w konsoli informację o obiekcie: "Imię: Jan, Nazwisko: Kowalski"
print(osoba1)