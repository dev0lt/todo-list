"use strict";

import { adder } from "./adder.js";

class Item {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  // logger() {
  //   console.log(this);
  // }
}

const defaultTask = new Item(
  "Go on walk",
  "Walk at least 5km",
  "Today",
  "Medium"
);

adder(defaultTask);

///

const buttonNewTask = document.querySelector(".new");
// const buttonAdd = document.querySelector(".add");

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

  console.log(newTask);
  adder(newTask);
  formContainer.style.visibility = "hidden";
});
