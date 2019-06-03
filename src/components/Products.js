import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

 const data = require('../assets/data/products.json');
class Products extends Component {
  constructor() {
    super();  
    this.state = {
      products: data.groups
    }  
  }

  render() {
    const { products } = this.state;
    console.log('products---', products);
    return (
      <div className="products-container">
        <h1>Products List</h1>
        <div className="products-item-container">
          {
            products.map((product, index) => (<ProductDetails key={index} {...product} />))
          }
        </div>
      </div>
    );
  }
}

export default Products;