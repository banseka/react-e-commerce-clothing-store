import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
import Detail from "./components/Detail";
import Cart from "./components/Cart/Cart";
import Model from "./components/Model";

function App() {
  return( 
      <div className='App container-fluid'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/detail' component={Detail} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Model />
      </div>
  );
}

export default App;
