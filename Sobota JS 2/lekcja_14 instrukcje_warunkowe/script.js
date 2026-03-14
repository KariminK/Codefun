// Stwórz zmienną o nazwie liczba z dowolną liczbą

let liczba = 67;

// Sprawdźmy, czy liczba jest dodatnia
if (liczba > 0) {
  console.log("Liczba jest dodatnia");
} else {
  console.log("Liczba jest ujemna");
}

// Napisz program, który zapyta uzytkownika o wiek
// I jesli wiek uzytkownika bedzie wiekszy od 18, to
// w alercie wyswietli sie "uzytkownik pelnoletni"
// W przeciwnym wypadku,
// w alercie wyswietli sie "uzytkownik niepelnoletni"

// let wiek = prompt("Podaj swój wiek");

// Napisz program, w którym sprawdzisz, czy
// liczba podana przez uzytkownika jest
// parzysta, czy nieparzysta
// x % 2 == 0

// let x = Number(prompt("Podaj liczbę"));

if ("17" == 17) {
  console.log("poprawne");
}

if ("18" === 18) {
  console.log("poprawne2");
}

if (6 != 7) {
  console.log("poprawne3");
}

if ("6" !== 6) {
  console.log("poprawne4");
}

let y = 3;

if (y == 50) {
  console.log("y jest rowne 50");
} else if (y < 50) {
  console.log("y mniejsze niz 50");
} else {
  console.log("y wieksze od 50");
}

// Napisz program, który zapyta się użytkownika o
// liczbę a i b, a nastepnie o to jakie chce dzialanie
// - Jeśli użytkownik wpisal suma, to wyswietl a + b
// dzialanie === "suma"
// - Jeśli użytkownik wpisal roznica, to wyswietl a - b
// - Jeśli użytkownik wpisal iloczyn, to wyswietl a * b
// - Jeśli użytkownik wpisal iloraz, to wyswietl a / b
// - W innym wypadku, wyswietl "blad!"

let a = Number(prompt("Podaj liczbe a"));
let b = Number(prompt("Podaj liczbe b"));

let dzialanie = prompt("podaj dzialanie");

if (dzialanie === "suma") {
  alert(a + b);
} else if (dzialanie === "roznica") {
  alert(a - b);
} else if (dzialanie === "iloczyn") {
  alert(a * b);
}
