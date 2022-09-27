"use strict";

import { data } from "./emoji.js"; // импорт объекта с массивами

const cont = document.querySelector(".grid__container"); // переменная для области, куда добавлять карточки

function removeRepeats(arr) {
  data.forEach((elem) => {
    elem.keywords = Array.from(new Set(elem.keywords.split(" "))).join(" ");
  });
} // функция для удаления дубликатов значений из объекта с массивами emoji.js

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

function inputHandler(event) {
  let x = event.target.value;
  let y = data.filter((elem) => elem.keywords.includes(x));
  cont.innerHTML = ""; // предварительная очистка страницы
  y.forEach((elem) => cont.append(createCard(elem))); // отрисовка элементов из нового массива
}
// функция для поиска и отрисовки по значению инпута
