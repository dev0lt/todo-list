"use strict";

import { taskList } from "./createTask.js";
import {
  showNewTaskForm,
  addTask,
  closeForm,
  renderTasks,
  removeTask,
  showDetails,
  closeDetails,
} from "./functions.js";
import { format, formatDistanceToNow } from "date-fns";

const dateToNow = function (x) {
  return formatDistanceToNow(x, { addSuffix: true });
};

const list = document.querySelector(".list");
const form = document.querySelector(".form_container");
const buttonNewTask = document.querySelector(".new");
const close2 = document.querySelector(".close2");

export class Item {
  constructor(title, description, dueDate, priority, toNow) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.toNow = toNow;
  }
}

// Default task created at the start

const defaultTask = new Item(
  "Go on walk",
  "Walk at least 5km",
  format(new Date(2024, 1, 11), "yyyy-MM-dd"),
  "Medium",
  dateToNow(format(new Date(2024, 1, 11), "yyyy-MM-dd"))
);

taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
// taskList.tasks.push(defaultTask);
renderTasks();
console.log(taskList.tasks);

// Event listeners

buttonNewTask.addEventListener("click", showNewTaskForm);

form.addEventListener("submit", addTask);

close2.addEventListener("click", closeForm);

list.addEventListener("click", removeTask);

list.addEventListener("click", showDetails);

document.addEventListener("click", closeDetails);
