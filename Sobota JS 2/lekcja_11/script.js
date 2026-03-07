console.log("Wypisz to");

// ta linijka się nie wykona
// console.log("Druga linijka");

// typ danych:

// Tekst (string):
let imie = "Adam";
console.log(imie);

// Liczba (number):
let a = 10;
let b = 5;
console.log(a * b);

// Logiczny (boolean):
let czyMamRacje = true;
console.log(czyMamRacje);

// Stwórz dwie zmienne e i f, które będą przechowywac jakąś liczbę
// W konsoli oblicz pole rombu: e * f / 2
let e = 67;
let f = 4;
console.log((e * f) / 2);

let pole = (e * f) / 2;

console.log(pole);

console.log(typeof pole);

// Sprawdź typ zmiennej imie i wypisz go w konsoli
console.log(typeof imie);

let licznik = 5;

console.log(licznik); // 5

licznik = 10;

console.log(licznik); // 10

licznik = licznik + 20;

console.log(licznik); // 30

licznik = licznik - 10;

console.log(licznik); // 20

// Null - pusta wartość

let nic = null;
let liczba = 20;
let zero = 0;
let brak = undefined;

alert("RCB");

let nazwa = prompt("Podaj nazwę");

console.log(nazwa);

alert("Witaj " + nazwa);

let x = prompt("Podaj x:");

// Sprawdź typ zmiennej x
// Zawsze prompt ma typ string (tekst)
console.log(typeof x);

// konwertujemy z string na number
x = Number(x);

// Sprawdź typ zmiennej x
console.log(typeof x);

// Stwórz dwie zmienne: g i h, które będą przechowywać liczbę podaną
// przez użytkownika
let g = prompt("Podaj g:");
let h = prompt("Podaj h:");

// Konwertujemy je na liczby
g = Number(g);
h = Number(h);

// Następnie w konsoli wypisz:
// - Sumę tych liczb (+)
// - różnicę tych liczb (-)
// - iloczyn tych liczb (*)
// - iloraz tych liczb (/)
console.log(g + h);
console.log(g - h);
console.log(g * h);
console.log(g / h);
