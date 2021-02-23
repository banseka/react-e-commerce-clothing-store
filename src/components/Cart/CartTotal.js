import React from "react";
import { Link } from "react-router-dom";
import PaypalButton from "./Paypal";
import "./cartTotal.css";

export default function CartTotal({ value, history }) {
  const { cartSubTotal, cartTotal, cartTax, clearCart } = value;
  return (
    <React.Fragment>
      <div className='cartTotal'>
        <Link to='/'>
          <button
            className='btn btn-outline-danger text-uppercase'
            type='button'
            onClick={() => {
              clearCart();
            }}
          >
            clear cart
          </button>
        </Link>
        <div className='totals'>
          <h5>
            <span>subtotal:</span>
            <strong>${cartSubTotal}</strong>
          </h5>

          <h5>
            <span> tax:</span>
            <strong>${cartTax}</strong>
          </h5>

          <h5>
            <span>total:</span> <strong>${cartTotal}</strong>
          </h5>
          <PaypalButton
            total={cartTotal}
            clearCart={clearCart}
            history={history}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
