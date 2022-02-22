const form = document.querySelector("form");

// Storage part
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos);

// Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

// Remove element
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
