import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <p className='navbar-brand'>logo</p>
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link className='nav-link' to='/'>
              products
            </Link>
          </li>
        </ul>
        <Link className='ml-auto' to='/cart'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus'></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.43rem;
  background: transparent;
  border: 0.05rem solid var(--mainColor);
  color: var(--textColor);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 1s ease-in-out;
  &:hover{
    background: var(--textColor);
    color: var(--simpleColor);
  };
  &:focus{
    outline: none
  }
`;
const NavWrapper = styled.nav`
background: var(--simpleColor);
.nav-link{
  text-transform: capitalize;
  color: var(--textColor) !important;
  font-size: 1.3rem
}
`