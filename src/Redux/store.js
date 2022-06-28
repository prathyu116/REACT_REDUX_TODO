import { userReducer } from "./user/reduce";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { TodoReducer } from "./todo/Reducer";

const rootReducer = combineReducers({
  user: userReducer,
  todo:TodoReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
