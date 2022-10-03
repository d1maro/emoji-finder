"use strict";

// import { data } from "./emoji.js"; // импорт массива с объектами

let url = "https://emoji.ymatuhin.workers.dev";

async function getData() {
  let response = await fetch(url);
  let data = await response.json();
  return data;
} // функция для получения массива с объектами по внешней ссылке

let data = await getData(url);

const cont = document.querySelector(".grid__container"); // переменная для области, куда добавлять карточки

function removeRepeats(arr) {
  data.forEach((elem) => {
    elem.keywords = Array.from(new Set(elem.keywords.split(" "))).join(" ");
  });
} // функция для удаления дубликатов значений из массива с объектами emoji.js

function createCard(data) {
  const card = document.createElement("div");
  card.className = "grid__card";

  const emoji = document.createElement("div");
  emoji.className = "card__emoji";
  emoji.textContent = data.symbol;

  const title = document.createElement("h2");
  title.className = "card__title";
  title.textContent = data.title;

  const description = document.createElement("p");
  description.className = "card__description";
  description.textContent = data.keywords;

  card.append(emoji);
  card.append(title);
  card.append(description);

  return card;
} // функция для создания карточки из объекта с массивами

removeRepeats(data); // вызов функции, которая удаляет дубликаты

data.forEach((elem) => {
  cont.append(createCard(elem));
}); // вызов функции для создания карточки внутри заданной области через цикл

const form = document.forms[0]; // переменная для формы (она единственная, поэтому forms[0])
form.addEventListener("submit", (event) => event.preventDefault()); // предотвращение перезагрузки страницы при отправке формы

const inputData = document.querySelector("input"); // переменная для инпута
inputData.addEventListener("change", inputHandler); // прослушивание элемента

// function inputHandler(event) {
//   let x = event.target.value.toLowerCase().trim(); // поиск не учитывает регистр и пробелы в конце и в начале
//   x = x.split(" ");
//   console.log(x);
//   let y = data.filter(
//     (elem) =>
//       elem.keywords.includes(x) ||
//       elem.title.includes(x) ||
//       (elem.keywords.includes(x[0]) && elem.keywords.includes(x[1])) ||
//       (elem.title.includes(x[0]) && elem.title.includes(x[1])) ||
//       (elem.keywords.includes(x[0]) &&
//         elem.keywords.includes(x[1]) &&
//         elem.keywords.includes(x[2])) ||
//       (elem.title.includes(x[0]) &&
//         elem.title.includes(x[1]) &&
//         elem.title.includes(x[2])) // поиск по ключевым словам и тайтлу
//   );
//   console.log(y);
//   cont.innerHTML = ""; // предварительная очистка страницы
//   y.forEach((elem) => cont.append(createCard(elem))); // отрисовка элементов из нового массива
// }
// функция для поиска и отрисовки по значению инпута с костылем для нескольких элементов

function inputHandler(event) {
  let x = event.target.value.toLowerCase().trim(); // поиск не учитывает регистр и пробелы в конце и в начале
  x = x.split(" ");
  let y = x.map((elem) =>
    data.filter((e) => e.keywords.includes(elem) || e.title.includes(elem))
  ); // переменная для поиска по нескольким ключевым словам
  cont.innerHTML = ""; // предварительная очистка страницы
  [...new Set(y.flat(2))].forEach((elem) => cont.append(createCard(elem))); // отрисовка элементов из нового массива
}
