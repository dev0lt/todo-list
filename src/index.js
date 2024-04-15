"use strict";

import { taskList } from "./createTask.js";
import {
  createNewTask,
  addTask,
  displayTasks,
  removeTask,
  showDetails,
  closeDetails,
  changeDescription,
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
  new Date().toDateString(),
  "Medium"
);

taskList.tasks.push(defaultTask);
displayTasks();

// Event listeners

buttonNewTask.addEventListener("click", createNewTask);

form.addEventListener("submit", addTask);

list.addEventListener("click", removeTask);

list.addEventListener("click", showDetails);

document.addEventListener("click", closeDetails);
