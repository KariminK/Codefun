// let nazwa_zmiennej = "wartosc";
// Szukanie elementu w html
// document.getElementById("id");
// document.querySelector("#id");
let button = document.getElementById("przycisk");

// Szukamy w html elementu o id mleko
// Przypisz go do zmiennej o nazwie listItem
let listItem = document.getElementById("mleko");

// Napisz program, który w konsoli wypisze piramidke
// W konsoli ma się wyświetlić:
// *
// **
// ***
// ****

let star = "*";

for (let i = 0; i < 5; i++) {
  console.log(star);
  star = star + "*";
}

// 1. Stwórz funkcję o nazwie "kupMleko", która będzie zmieniać
// kolor tła zmiennej listItem na czarny, a kolor tekstu
// na biały.
// 2. Stwórz zmienną "czyKupione" i przypisz do niej false i
// jeżeli czyKupione jest prawdą
// to zmień kolor tła z powrotem na biały, a tekstu na czarny
// jezeli czyKupione jest fałszem
// to zmień kolor tła na czarny, a tekstu na biały

let czyKupione = false;

function kupMleko() {
  if (czyKupione === true) {
    listItem.style.backgroundColor = "white";
    listItem.style.color = "black";
  } else {
    listItem.style.backgroundColor = "black";
    listItem.style.color = "white";
  }
}
