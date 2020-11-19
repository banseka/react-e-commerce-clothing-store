import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer/rootReducer";
import thunk from "redux-thunk";
//import { changeData, updateData } from "./actions/Action";

const initialSate = {};
const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialSate,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
