import React, { Component } from "react";
import axios from "axios";
import "./Products.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }
  componentDidMount() {
    axios.get(`/api/inventory`).then(response => {
      this.setState({
        inventory: response.data
      });
    });
  }

  render() {
    const { inventory } = this.state;
    const allProducts = inventory.map(element => {
      return (
        <div className="product" key={element.id}>
          <div className="picture">
            <img className="productImg" src={element.img} />
          </div>
          <div className="info">
            <div className="productName">{element.name}</div>
            <div className="productPrice">${element.price}</div>
            <div className="inventoryButtons">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="allProducts">
        <div>{allProducts}</div>
      </div>
    );
  }
}
