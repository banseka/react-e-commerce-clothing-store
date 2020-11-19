import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, price, title, incart, info, image } = value.productDetail;
          return (
            <div className='container'>
              <div className='row'>
                <div className='col-10 max-auto text-slanted my-5 text-center text-green'>
                  <h1>{title}</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 col-md-6 mx-auto my-3'>
                  <img src={image} className='img-fluid' alt='product' />
                </div>
                <div className='col-10 col-md-6 mx-auto my-3 text-capitalize'>
                  <h2>strain: {title}</h2>
                  <h4 className='text-green'>
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    some information about the product
                  </p>
                  <p className='text-muted lead'>{info}</p>
                  <div>
                    <Link to='/'>
                      <ButtonContainer className='text-capitalize'>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={incart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModel(id);
                      }}
                    >
                      {incart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
