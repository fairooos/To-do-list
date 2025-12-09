
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${text}
    <button class="delete-btn">X</button>
  `;

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
});