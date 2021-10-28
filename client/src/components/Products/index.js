import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../api';

class Products extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    getAllProducts().then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    return (
      <>
        <ul>
          {this.state.products.map((p, i) => {
            return (
              <li>
                <Link to={`/${p.id}`}>{p.name}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Products;
