import React, { Component } from "react";
import axios from "axios";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      img: ""
    };
  }

  render() {
    return (
      <div>
        <div>
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
          <button>Add Item</button>
        </div>
      </div>
    );
  }
}
