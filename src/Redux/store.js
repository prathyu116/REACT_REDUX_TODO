import { userReducer } from "./user/reduce";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
