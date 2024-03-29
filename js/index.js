import { getToDoData } from "./models/toDoListModel";
import { toDoListView } from "./views/toDoListView";

export function appInit() {
  getToDoData();
  toDoListView();
}

appInit();