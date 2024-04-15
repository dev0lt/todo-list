"use strict";

import { adder, tasks } from "./adder.js";

class Item {
  constructor(title, description, dueDate, priority, index) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const defaultTask = new Item(
  "Go on walk",
  "Walk at least 5km",
  "Today",
  "Medium"
);

tasks.push(defaultTask);

function displayTasks() {
  tasks.forEach((el, i) => {
    el.index = i;
    adder(el, i);
  });
}

displayTasks();

///

const buttonNewTask = document.querySelector(".new");

const formContainer = document.querySelector(".form_container");
const form = document.querySelector(".form");

buttonNewTask.addEventListener("click", function () {
  formContainer.style.visibility = "visible";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTask = new Item(
    this.title.value,
    this.description.value,
    this.dueDate.value,
    this.priority.value
  );

  tasks.push(newTask);
  console.log(tasks);
  formContainer.style.visibility = "hidden";
  list.innerHTML = ``;
  displayTasks();
});

const list = document.querySelector(".list");

function deleteTask(i) {
  tasks.splice(i, 1);
}

list.addEventListener("click", function (e) {
  const target = e.target.closest(".delete");

  if (target === null) return;

  if (target.className === "delete") {
    deleteTask(e.target.parentNode.parentNode.dataset.index);
    list.innerHTML = ``;
    displayTasks();
  }
});
