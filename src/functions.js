"use strict";

const list = document.querySelector(".list");
const formContainer = document.querySelector(".form_container");

import { Item } from ".";
import { taskList, adder } from "./createTask";

export function displayTasks() {
  taskList.tasks.forEach((el, i) => {
    el.index = i;
    adder(el, i);
  });
}

export function createNewTask() {
  formContainer.style.visibility = "visible";
}

export function addTask(e) {
  e.preventDefault();

  const newTask = new Item(
    this.title.value,
    this.description.value,
    this.dueDate.value,
    this.priority.value
  );

  taskList.tasks.push(newTask);
  formContainer.style.visibility = "hidden";
  list.innerHTML = ``;
  displayTasks();
}

export function removeTask(e) {
  const target = e.target.closest(".delete");

  if (target === null) return;

  if (target.className === "delete") {
    deleteTaskfromArray(e.target.closest("li").dataset.index);
    list.innerHTML = ``;
    displayTasks();
  }
}

export function showDetails(e) {
  const target = e.target.closest(".title");

  if (target === null) return;

  if (target.className === "title") {
    const target2 = e.target.closest("li").dataset.index;
    taskList.index = target2;

    displayDetails(taskList.tasks[target2]);

    const overlay = document.querySelector(".modal_overlay");
    overlay.style.visibility = "visible";
  }
}

export function closeDetails(e) {
  const target = e.target.closest(".close");

  if (target === null) return;

  if (target.className === "close") {
    const overlay = document.querySelector(".modal_overlay");
    overlay.style.visibility = "hidden";

    const wrapper = document.querySelector(".wrapper");

    wrapper.removeChild(document.querySelector(".task_details"));
  }
}

// Inner functions

function deleteTaskfromArray(i) {
  taskList.tasks.splice(i, 1);
}

function displayDetails(el) {
  const item = document.createElement("div");
  item.classList = "task_details";

  item.innerHTML = `
  <h3>${el.title}</h3>
  <p>${el.description}</p>
  <textarea id="description">${el.description}</textarea>
  <p>${el.dueDate}</p>
  <p>${el.priority}</p>
  <button class="close">Close</button>`;

  item.style.visibility = "visible";

  const wrapper = document.querySelector(".wrapper");

  wrapper.appendChild(item);
}
