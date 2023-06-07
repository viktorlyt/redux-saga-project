import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import counterReducer from "../counterSlice";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  counter: counterReducer,
  router: connectRouter(history),
});

export default rootReducer;
