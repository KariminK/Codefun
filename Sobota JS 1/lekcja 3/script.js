// Stwórz dwie zmienne: licznik i przycisk. Przypisz do nich kolejno
// element o id licznik i element o id przycisk
let licznik = document.getElementById("licznik");
let przycisk = document.getElementById("przycisk");
let przycisk2 = document.getElementById("przycisk2");
let przycisk3 = document.getElementById("przycisk3");

function dodaj(event) {
  console.log(event.target);
  // Stwórz zmienną o nazwie obecnyLicznik i przypisz do niej
  // zawartość elementu w zmiennej licznik.
  // bonus: Przekonwertuj tekst na liczbe
  let obecnyLicznik = parseInt(event.target.textContent);

  // Zinkrementuj zmienną obecnyLicznik i
  // przypisz ją do tekstu elementu licznik

  obecnyLicznik = obecnyLicznik + 1;
  event.target.innerText = obecnyLicznik;
}

// dodaj funkcje do wydarzenia
przycisk.addEventListener("click", dodaj);

// Z tekstu na liczbe

// parseInt("32");
// Number("32");
// +"32";

// "32" -> 32
