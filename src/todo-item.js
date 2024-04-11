"use strict";

const list = document.querySelector(".list");

class Item {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  logger() {
    console.log(this);
  }
}

const task = new Item("sprzatanie", "posprzatac dom", "dzisiaj", "wysokie");

task.logger();

function adder() {
  const item = document.createElement("li");

  item.innerHTML = `<div class="item">
  <p>1</p>
  <p>${task.title}</p>
  <p>${task.description}</p>
  <p>${task.dueDate}</p>
  <p>${task.priority}</p>
  <button>USUŃ</button>
</div>`;

  list.appendChild(item);
}

adder();

///

const buttonAdd = document.querySelector(".add");

buttonAdd.addEventListener("click", function () {});
