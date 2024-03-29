let store;
let instance;

export async function createStore(todos) {
  if (instance) {
    throw new Error("New instance cannot be created");
  }

  instance = 1;

  store = todos;

  if (store.length) {
    return true;
  }
}

export function getStore() {
  return store;
}

export function removeFromStore(uid) {
  store = store.filter(item => item.uid !== uid);
  return store;
}

 export const updateStore = (todo) => {
  const index = store.findIndex((item) => item.uid === todo.uid);
  store = [...store.slice(0, index), todo, ...store.slice(index + 1)];
  return store;
}

export function addToStore(todo, uid) {
  const final = { ...todo, uid };
  store.push(final);
  return store;
}