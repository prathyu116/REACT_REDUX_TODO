import { ADD_TOKEN, ADD_USER, LOGOUT_USER } from "./action";

const init = {
  user: "",
  token: "",
  isAuth: false,
};

export const userReducer = (store = init, { type, payload }) => {

  switch (type) {
    case ADD_USER:
      return {
        ...store,
        user: payload,
        isAuth: true,
      };

    case ADD_TOKEN:
      return {
        ...store,
        token: payload,
      };
    case LOGOUT_USER:
      return {
        ...store,
        isAuth: false,
      };

    default:
      return store;
  }
};
