import { ADD_TOKEN, ADD_USER, IS_LOADING, LOGOUT_USER } from "./action";

const init = {
  user: "",
  token: "",
  isAuth: false,
  loading: false,
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
    case IS_LOADING:
      return { ...store, loading: true };

    default:
      return store;
  }
};
