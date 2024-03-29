import { getStore } from "../models/store";
import { updateToDo } from "../models/toDoListModel";

let dialog
let closeButton
let exitButton
let form
let uid


export function updateToDoController(itemUid) {
  uid = itemUid;
  const todo = getStore().find(item => item.uid === uid);
  dialog = document.querySelector("#update-to-do");
  exitButton = dialog.querySelector("#exit");
  closeButton = dialog.querySelector("#close");
  form = dialog.querySelector("form");
  configUi(todo);
  configureListeners();
  dialog.showModal();
}

function configUi(item) {
  dialog.querySelector("#todo").value = item.todos;
  dialog.querySelector("#category").value = item.category;
  dialog.querySelector("#status").value = item.status;
}

function configureListeners() {
  exitButton.addEventListener("click", onCloseDialog);
  closeButton.addEventListener("click", onCloseDialog);
  form.addEventListener("submit", onUpdateToDoItem);
}

function onUpdateToDoItem(e) {
  e.preventDefault();
  const todos = e.currentTarget.todo.value.trim();
  const category = e.currentTarget.category.value.trim();
  const status = e.currentTarget.status.value.trim();
  updateToDo({
    todos,
    category,
    status,
    uid
  })
}

function onCloseDialog(e) {
  dialog.close();
}