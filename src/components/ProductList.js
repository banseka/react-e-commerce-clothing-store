import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import {ProductConsumer} from "./Context";
import SevitaSection from "../SevitaSection";
//import SevitaProductSection from "./sevita/SevitaProdctSection";

export default class ProductList extends Component {
  render() {
    return (
      <div className='container'>
        <Title name='our' title='products' />
        <div className='row'>
          <div className='col-10 col-lg-3 col-md-6 py-3'>
            <ProductConsumer>
              {(value) =>
                value.productData.map((product) => (
                  <SevitaSection key={product.id} products={product} />
                ))
              }
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}
