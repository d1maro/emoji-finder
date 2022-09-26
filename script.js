"use strict";

const emojiArr = [
    {content: "🔢", head: "1234", text: "input symbol for numbers symbol"},
    {content: "🔢", head: "1234", text: "input symbol for numbers symbol"},
    {content: "🔢", head: "1234", text: "input symbol for numbers symbol"},
];

const cont = document.querySelector(".grid__container");

function createCard(emojiArr) {
const card = document.createElement("div");
card.className = "grid__card";

const emoji = document.createElement("div");
emoji.className = "card__emoji";
emoji.textContent = emojiArr.content;

const title = document.createElement("h2");
title.className = "card__title";
title.textContent = emojiArr.head;

const description = document.createElement("p");
description.className = "card__description";
description.textContent = emojiArr.text;

card.append(emoji);
card.append(title);
card.append(description);

return card;
}

emojiArr.forEach(elem => {
    cont.append(createCard(elem));
})