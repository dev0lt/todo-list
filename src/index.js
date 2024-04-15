"use strict";

import { taskList } from "./createTask.js";
import {
  createNewTask,
  addTask,
  displayTasks,
  removeTask,
  showDetails,
  closeDetails,
} from "./functions.js";

const list = document.querySelector(".list");
const form = document.querySelector(".form");
const buttonNewTask = document.querySelector(".new");

export class Item {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

// Default task created at the start

const defaultTask = new Item(
  "Go on walk",
  "Walk at least 5km",
  "Today",
  "Medium"
);

taskList.tasks.push(defaultTask);
displayTasks();

console.log(taskList.tasks);
/// Functions

// function displayTasks() {
//   tasks.forEach((el, i) => {
//     el.index = i;
//     adder(el, i);
//   });
// }

// function displayDetails(el) {
//   const item = document.createElement("div");
//   item.classList = "task_details";

//   item.innerHTML = `
//   //   <p>${el.title}</p>
//   //   <p>${el.description}</p>
//   //   <p>${el.dueDate}</p>
//   //   <p>${el.priority}</p>
//   <button class="close">X</button>`;

//   item.style.visibility = "visible";

//   const wrapper = document.querySelector(".wrapper");

//   wrapper.appendChild(item);
// }

// Event listeners

buttonNewTask.addEventListener("click", createNewTask);

form.addEventListener("submit", addTask);

list.addEventListener("click", removeTask);

list.addEventListener("click", showDetails);

document.addEventListener("click", closeDetails);
