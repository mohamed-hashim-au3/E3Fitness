import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { Home } from "./Home";

const RootReducer = history =>
  combineReducers({
    Home,
    router: connectRouter(history)
  });

export default RootReducer;
