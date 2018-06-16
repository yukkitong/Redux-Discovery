import { createStore } from 'redux';

const store = createStore((state = "No words...", action) => {
  if (action.type === "SAY_HELLO") {
    return "Hello World!";
  }
  return state;
});

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "UNKNOWN" });
store.dispatch({ type: "SAY_HELLO" });

unsubscribe();
