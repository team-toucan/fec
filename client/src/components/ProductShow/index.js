import React, { Component } from 'react';
import { getProductById, getProductReviews } from '../../api';

class ProductShow extends Component {
  state = {
    product: {},
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    getProductById(id).then((res) => {
      this.setState({ product: res.data });
    });
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <h1 className="text-7xl text-center">{this.state.product.name}</h1>
        <Reviews productId={id} />
      </div>
    );
  }
}

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    getProductReviews(this.props.productId).then((res) => {
      console.log(res.data.results);
      this.setState({ reviews: res.data.results });
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        REVIEWS data
        {this.state.reviews.map((r) => (
          <div>{r.body}</div>
        ))}
      </div>
    );
  }
}

export default ProductShow;
