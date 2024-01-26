const submitButton = document.getElementById("todo-form__button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const input = document.getElementById("todo-form__input");
  if (input.value === "") {
    return;
  }

  const list = document.getElementsByClassName("todo-list__container")[0];

  const item = document.createElement("li");
  item.classList.add("todo-list__item");

  const content = document.createElement("span");
  content.textContent = input.value;
  content.classList.add("todo-list__item__content");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.addEventListener("click", () => {
    list.removeChild(item);
  });
  deleteButton.classList.add("todo-list__item__delete__button");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", () => {
    const isChecked = checkbox.checked;
    isChecked ? content.classList.add("done") : content.classList.remove("done");
  });
  checkbox.classList.add("todo-list__item__checkbox");

  item.appendChild(checkbox);
  item.appendChild(content);
  item.appendChild(deleteButton);
  list.appendChild(item);

  input.value = "";
});
