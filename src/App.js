import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import AddProduct from "./components/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="body">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/AddInventory" component={AddProduct} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
