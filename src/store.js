import { createStore, combineReducers } from "redux";
import { reducer as App1 } from "./apps/App1/reducers/index";
import { reducer as App2 } from "./apps/App1/reducers/index";
import { reducer as App3 } from "./apps/App1/reducers/index";

let rootReducer = combineReducers({
  App1,
  App2,
  App3
});
let store = createStore(rootReducer);

export { store };
