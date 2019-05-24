import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import AddProduct from "./components/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Products />
        <AddProduct />
      </div>
    </div>
  );
}

export default App;
