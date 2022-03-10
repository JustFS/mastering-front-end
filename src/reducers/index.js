import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import listReducer from "./list.reducer";

export default combineReducers({
  stableReducer,
  listReducer,
});
