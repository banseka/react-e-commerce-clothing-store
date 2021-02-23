import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Title from "./Title";
import {ProductConsumer} from "./Context";
import Product from "./Product"


export default class ProductList extends Component {
  render() {
    return (
      <div className='py-5'>
        <Title name='our' title='products' />
        <div className='container'>
          <div className='row'>
            <ProductConsumer>
              {(value) =>
                value.products.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              }
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}
