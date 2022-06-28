//Acton types
export const ADD_TODO = "ADD_TODO";
export const SORT = "SORT";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const PERSONAL_TODO = "PERSONAL_TODO";
export const OFFICIAL_TODO = "OFFICIAL_TODO";
export const OTHORS_TODO = "OTHORS_TODO";
//Action Creator-this is for re useability

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const getTodos = () => async (dispatch) => {
  const data = await fetch("http://localhost:8080/todos").then((d) => d.json());
  dispatch(addTodo(data));
};
export const getPersonalTodos = () => {
  return {
    type: PERSONAL_TODO,
  };
};
export const getOfficialTodo = () => {
  return {
    type: OFFICIAL_TODO,
  };
};
export const getOthorsTodo = () => {
  return {
    type: OTHORS_TODO,
  };
};

export const sort = (by) => {
  console.log("N", by);
  return {
    type: SORT,
    payload: by,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
