export const ADD_USER = "ADD_USER";
export const ADD_TOKEN = "ADD_TOKEN";
export const LOGOUT_USER = "LOGOUT_USER";
export const IS_LOADING = "IS_LOADING";
export const addUser = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};

export const addToken = (token) => {
  return {
    type: ADD_TOKEN,
    payload: token,
  };
};

export const logOutUser = (data) => {
  return {
    type: LOGOUT_USER,
    payload:data
  };
};
export const handleLoading = () => {
  return {
    type: IS_LOADING,
  };
};
