import { combineReducers } from "redux";
import { changeReducer } from "./ChangeReducer";
import { updateReducer } from "./updateReducer";

export const rootReducer = combineReducers({
  change: changeReducer,
  update: updateReducer,
});
