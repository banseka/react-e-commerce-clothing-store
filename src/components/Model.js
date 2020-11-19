import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { closeModel } = value;
          const { image, price, title } = value.modelProduct;
          if (!value.modelOpen) {
            return null;
          } else {
            return (
              <ModelContainer>
                <div className='container'>
                  <div className='row mx-5 my-5'>
                    <div
                      id='model'
                      className='col-8 col-md-6 collg-4 text-capitalize mx-auto text-center p-5'
                    >
                      <h5>item added to the cart</h5>
                      <img src={image} className='img-fluid' alt='product' />
                      <h5>{title}</h5>
                      <h5 className='text-muted'> price: ${price}</h5>
                      <Link to='/'>
                        <ButtonContainer onClick={() => closeModel()}>
                          continue shoppong
                        </ButtonContainer>
                      </Link>
                      <Link to='/cart'>
                        <ButtonContainer cart onClick={() => closeModel()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModelContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModelContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.3);
  #model {
    background: var(--textColor);
  }
`;
