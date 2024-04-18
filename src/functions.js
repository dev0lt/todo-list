"use strict";

import { Item } from ".";
import { taskList, adder } from "./createTask";

const list = document.querySelector(".list");
const formContainer = document.querySelector(".form_container");
const wrapper = document.querySelector(".wrapper");
const overlay = document.querySelector(".modal_overlay");

export function renderTasks() {
  list.innerHTML = ``;

  taskList.tasks.forEach((el, i) => {
    el.index = i;
    adder(el, i);
  });
}

export function showNewTaskForm() {
  formContainer.style.visibility = "visible";
  overlay.style.visibility = "visible";
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
  overlay.style.visibility = "hidden";
  list.innerHTML = ``;

  formContainer.reset();

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

    overlay.style.visibility = "visible";
  }
}

export function closeDetails(e) {
  const target = e.target.closest(".close");

  if (target === null) return;

  if (target.className === "close") {
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
  <ul class="form_items">
    <li>
      <label for="title">Title:</label>
      <input type="text" name="" id="title" value="${el.title}" />
    </li>
    <li>
      <label for="description">Description:</label>
      <input type="text" name="" id="description" value="${el.description}"/>
    </li>
    <li>
      <label for="dueDate">Due date:</label>
      <input type="date" name="" id="dueDate" value="${el.dueDate}"/>
    </li>
    <li>
      <label for="priority">Priority:</label>
      <input type="text" name="" id="priority" value="${el.priority}"/>
    </li>
    </ul>
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
  renderTasks();
}

function deleteTaskfromArray(i) {
  taskList.tasks.splice(i, 1);
}
