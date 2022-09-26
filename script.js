"use strict";

import { data } from "./emoji.js"

const cont = document.querySelector(".grid__container");

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
}

data.forEach(elem => {
    cont.append(createCard(elem));
})