export function adder(obj) {
  const list = document.querySelector(".list");

  const item = document.createElement("li");

  item.innerHTML = `<div class="item">
  <p>1</p>
  <p>${obj.title}</p>
  <p>${obj.description}</p>
  <p>${obj.dueDate}</p>
  <p>${obj.priority}</p>
  <button>USUŃ</button>
</div>`;

  list.appendChild(item);
}
