"use strict";
const div = document.querySelector("#root");
const btn = document.querySelector(".btn");
const span = document.querySelector(".quote--id");

const renderQoute = (quote) => {
  div.insertAdjacentText("beforeend", quote.slip.advice);
  span.insertAdjacentText("beforeend", quote.slip.id);
  div.style.opacity = 1;
};

const getQoute = () => {
  div.style.opacity = 0;
  span.textContent = "";
  div.textContent = "";
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((quote) => {
      renderQoute(quote);
    }).catch((err) => div.insertAdjacentText("beforeend", `${err} happend`));
};
 getQoute();
btn.addEventListener("click", getQoute);
