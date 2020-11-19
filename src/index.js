import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./components/Context";
//import ReduxTest from "./redux/ReduxTest";
import { Provider } from "react-redux";
import store from "./Store";
//import TodoRender from "./todoapp/TodoRender"
//import SevitaProduct from "./components/sevita/SevitaProduct"

ReactDOM.render(
  <Provider store={store}>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </Provider>,
  document.getElementById("root")
);
/*ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,

  document.getElementById("root")
);*/
