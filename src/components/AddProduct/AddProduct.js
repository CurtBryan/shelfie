import React, { Component } from "react";
import axios from "axios";
import "./AddProduct.css";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      img: ""
    };
    this.postItemToPage = this.postItemToPage.bind(this);
  }

  postItemToPage(name, price, img) {
    // const { name, price, img } = this.state;
    axios.post("api/inventory", {
      name,
      price,
      img
    });
  }

  render() {
    const { name, price, img } = this.state;
    return (
      <div>
        <section className="inputsBox">
          <img className="testImg" src={img} />
          <input
            placeholder="Product Name"
            onChange={e =>
              this.setState({
                name: e.target.value
              })
            }
          />
          {console.log(this.state)}
          <input
            placeholder="Price"
            onChange={e =>
              this.setState({
                price: e.target.value
              })
            }
          />
          <input
            placeholder="Image Url"
            onChange={e => {
              this.setState({
                img: e.target.value
              });
            }}
          />
          <button onClick={() => this.postItemToPage(name, price, img)}>
            Add Item
          </button>
        </section>
      </div>
    );
  }
}
