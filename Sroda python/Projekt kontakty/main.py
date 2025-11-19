#*KLASA Contact*
#Ta klasa będzie nam reprezentować jeden kontakt
#- posiada trzy pola: imie, nazwisko, numer_telefonu
#- dodajemy do nich wartość w konstruktorze
#- posiada także metodę print_info(), która nam zwróci
#info o kontakcie w formacie: 
#"Imię: {imie}\t Nazwisko: {nazwisko}\t Numer Telefonu: {numer_telefonu}"
class Contact:
    def __init__(self, imie, nazwisko, numer_telefonu):
        self.imie = imie
        self.nazwisko = nazwisko
        self.numer_telefonu = numer_telefonu
    def print_info(self):
        print("Imię:", self.imie, "\tNazwisko:", self.nazwisko, "\tNumer telefonu: ", self.numer_telefonu)

class ContactManager:
    # W konstruktorze dodajemy nazwe pliku i pustą tablice na kontakty
    def __init__(self, nazwa_pliku):
        self.nazwa_pliku = nazwa_pliku
        self.kontakty = []
    def odczytaj(self):
        # otwieramy plik w trybie do odczytu (domyślnym)
        with open(self.nazwa_pliku, encoding="utf8") as plik:
            # Dla każdej linijki w pliku
            for linia in plik:
                # rozdzielamy dane po przecinku
                kontakt = linia.split(",")
                # Wkładamy obiekty klasy kontakt do tablicy
                # w pliku pierwsza informacja jest imie, druga nazwisko, a trzecia numer telefonu
                self.kontakty.append(Contact(kontakt[0], kontakt[1], kontakt[2]))
    def wypisz(self):
        # dla każdego kontaktu
        for kontakt in self.kontakty:
            # wywołuje metodę print_info z klasy, którą tworzyliśmy wcześniej
            kontakt.print_info()

manager = ContactManager("kontakty.csv")
manager.odczytaj()
manager.wypisz()