import { combineReducers } from "redux";
import { sevitaReducer } from "./SevitaReducer";
import { hybrideReducer } from "./hybrideReducer";

export default combineReducers({
  sevita: sevitaReducer,
  hybride: hybrideReducer,
});
