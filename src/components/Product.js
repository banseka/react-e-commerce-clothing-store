import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "./Context";

export default class Product extends Component {
  render() {
    const { id, price, image, title, incart } = this.props.product;
    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <div className='card'>
          <ProductConsumer>
            {(value) => (
              <div
                className='img-container p-0'
                onClick={() => {
                  value.handleDetail(id);
                }}
              >
                <Link to='/detail'>
                  <img src={image} alt='product' className='card-img-top' />
                </Link>
                <button
                  className='cart-btn '
                  disabled={incart ? true : false}
                  onClick={() => {
                    value.openModel(id);
                    value.addToCart(id);
                  }}
                >
                  {incart ? (
                    <p className='text-capitalize mb-0 disabled'>in cart</p>
                  ) : (
                    <i className='fas fa-cart-plus' />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0 text-uppercase '>{title}</p>
            <h5 className='text-green font-italic mb-0'>
              <span>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propType = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    incart: PropTypes.bool,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    boder-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    border-top: transparent;
    background: transparent;
    transition: all 1s linear;
  }
  &:hover{
    .card{
      boder: 0.04rem, solid rgb(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgb(0,0,0,0.2);
    }
    .card-footer{
      background rgb(0, 0, 0, 0.1);
    }
  }
  .img-container{
      position: relative;
      overflow: hidden;
    }
    .card-img-top{
      transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
      transform: scale(1.5);
    }
    .cart-btn{
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.2rem 0.4rem;
      background: var( --color);
      border: none;
      color: var(--textColor); 
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all 1s linear;
    }
    .img-container:hover .cart-btn{
      transform: translate(0,0);
    }
    .cart-btn:hover{
      color: var( --simpleColor);
      cursor: pointer;
    }
`;
