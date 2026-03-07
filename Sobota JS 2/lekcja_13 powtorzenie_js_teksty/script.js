// Utwórz zmienną o nazwie tekst, która będzie miała
// wartość "Ala ma kota"
let tekst = "Ala ma kota";

// Wypisz go w konsoli
console.log(tekst);

// Utwórz zmienna tekst_duzymi, która przechowa zmienną
// tekst, ale dużymi literami
let tekst_duzymi = tekst.toUpperCase();

// Wypisz ją w konsoli
console.log(tekst_duzymi);

let tekst_malymi = tekst.toLowerCase();

console.log(tekst_malymi);

let tekst1 = "Programowanie ";
let tekst2 = "jest super";

console.log(tekst1 + tekst2);

let tekst3 = tekst2.substring(0, 4);
console.log(tekst3);

let imie = "Jan";
let nazwisko = "Kowalski";

// Wypisz w konsoli inicjały tej osoby
// dla tego przykładu w konsoli: JK
let inicjaly = imie.substring(0, 1) + nazwisko.substring(0, 1);
console.log(inicjaly);

let losowa = Math.random() * 1000;
console.log(losowa);

let zaokraglona = Math.floor(losowa);
console.log(zaokraglona);

// zapytaj uzytkownika o jego imie
let imieUzytkownika = prompt("Podaj swoje imie");

// zapytaj uzytkownika o jego nazwisko
let nazwiskoUzytkownika = prompt("Podaj swoje nazwisko");

// Polacz imie, nazwisko i liczbe w formacie
// jankow.670
// I wypisz w konsoli
let imieLogin = imieUzytkownika.substring(0, 3).toLowerCase();
let nazwiskoLogin = nazwiskoUzytkownika.substring(0, 3).toLowerCase();

let login = imieLogin + nazwiskoLogin + "." + zaokraglona;

console.log(login);
