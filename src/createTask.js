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
  <button class="delete">Delete</button>
</div>`;

  list.appendChild(item);
}
/*
export function addForm() {
  const wrapper = document.querySelector(".wrapper");

  const item = document.createElement("form");

  item.innerHTML = `<div class="form_container">
  <form class="form" action="">
    <label for="title">Title:</label>
    <input type="text" name="" id="title" />
    <label for="description">Description:</label>
    <input type="text" name="" id="description" />
    <label for="dueDate">Due date:</label>
    <input type="date" name="" id="dueDate" />
    <label for="priority">Priority:</label>
    <input type="text" name="" id="priority" />
    <button class="add">Add</button>
  </form>
</div>`;

  wrapper.appendChild(item);
}
*/
