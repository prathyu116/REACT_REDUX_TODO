import { ADD_TODO, DELETE_TODO, OFFICIAL_TODO, OTHORS_TODO, PERSONAL_TODO, SORT, TOGGLE_TODO } from "./Action";
const init = { todos: [], personalTodo: [], officialTodo: [], othorsTodo: [] };

export const TodoReducer = (store = init, { type, payload }) => {
  console.log("sss", payload);
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: payload };
    case PERSONAL_TODO:
      var personal = store.todos.filter((itm) => {
        return itm.type.personal === true;
      });
      return { ...store, personalTodo: personal };

    case OFFICIAL_TODO:
      return { ...store, officialTodo: store.todos.filter((el) => el.type.official === true) };
    case OTHORS_TODO:
      return { ...store, othorsTodo: store.todos.filter((el) => el.type.othors === true) };

    default:
      return store;
  }
};
