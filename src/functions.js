"use strict";

const list = document.querySelector(".list");
const formContainer = document.querySelector(".form_container");
const wrapper = document.querySelector(".wrapper");

import { Item } from ".";
import { taskList, adder } from "./createTask";

export function renderTasks() {
  taskList.tasks.forEach((el, i) => {
    el.index = i;
    adder(el, i);
  });
}

export function showNewTaskForm() {
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
  renderTasks();
}

export function removeTask(e) {
  const target = e.target.closest(".delete");

  if (target === null) return;

  if (target.className === "delete") {
    deleteTaskfromArray(e.target.closest("li").dataset.index);
    list.innerHTML = ``;
    renderTasks();
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

    const thisForm = document.querySelector(".form2");

    overwriteDetails(thisForm);
    console.log(taskList.tasks);

    wrapper.removeChild(document.querySelector(".task_details"));
  }
}

// Inner functions

function displayDetails(el) {
  const item = document.createElement("div");
  item.classList = "task_details";

  item.innerHTML = `
  <form class="form2" action="">
  <label for="title">Title:</label>
  <input type="text" name="" id="title" value="${el.title}" />
  <label for="description">Description:</label>
  <input type="text" name="" id="description" value="${el.description}"/>
  <label for="dueDate">Due date:</label>
  <input type="date" name="" id="dueDate" value="${el.dueDate}"/>
  <label for="priority">Priority:</label>
  <input type="text" name="" id="priority" value="${el.priority}"/>
  <button class="close">Close</button>
  </form>`;

  item.style.visibility = "visible";

  wrapper.appendChild(item);
}

function overwriteDetails(x) {
  taskList.tasks[taskList.index] = {
    title: x.title.value,
    description: x.description.value,
    dueDate: x.dueDate.value,
    priority: x.priority.value,
  };
}

function deleteTaskfromArray(i) {
  taskList.tasks.splice(i, 1);
}
