"use strict";

export let taskList = (function () {
  let tasks = [];
  let index = 0;
  return { tasks, index };
})();

export function adder(obj, i) {
  const list = document.querySelector(".list");

  const item = document.createElement("li");

  item.setAttribute("data-index", `${i}`);

  item.innerHTML = `<div class="item">
  <p>${i + 1}</p>
  <p class="title">${obj.title}</p>
  <p class="date">${obj.toNow}</p>
  <button class="delete">Delete</button>
</div>`;

  list.appendChild(item);
}
