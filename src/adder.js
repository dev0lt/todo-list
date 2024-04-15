export let tasks = [];

export function adder(obj, i) {
  const list = document.querySelector(".list");

  const item = document.createElement("li");

  item.setAttribute("data-index", `${i}`);

  item.innerHTML = `<div class="item">
  <p>${i + 1}</p>
  <p>${obj.title}</p>
  <p>${obj.description}</p>
  <p>${obj.dueDate}</p>
  <p>${obj.priority}</p>
  <button class="delete">Delete</button>
</div>`;

  list.appendChild(item);
}
