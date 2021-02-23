import React, { Component } from "react";
import Title from "../Title";
import { ProductConsumer } from "../Context";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmpyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <>
                  <Title name='your' title='cart' />
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotal value={value} history={this.props.history} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
