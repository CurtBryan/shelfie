import React, { Component } from "react";
import axios from "axios";
import "./Products.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/inventory`).then(response => {
      this.setState({
        inventory: response.data
      });
    });
  }

  // editPost(id, name, price, img)

  deletePost(id) {
    axios.delete(`/api/inventory/${id}`).then(response => {
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
          <div className="whiteBar">
            <div className="picture">
              <img className="productImg" src={element.img} />
            </div>
            <div className="info">
              <div className="productName">{element.name}</div>
              <div className="productPrice">${element.price}</div>
              <div className="inventoryButtons">
                <button onClick={() => this.deletePost(element.id)}>
                  Delete
                </button>
              </div>
            </div>
            {/* <div>
              <input defaultValue={element.id} />
              <input defaultValue={element.name} />
              <input defaultValue={element.price} />
              <input defaultValue={element.img} />
            </div> */}
            <button>Edit</button>
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
