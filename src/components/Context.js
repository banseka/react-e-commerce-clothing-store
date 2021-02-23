import React, { Component } from "react";
import { Data, detailedProduct } from "./data/Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  //global state values
  state = {
    productData: Data,
    productDetail: detailedProduct,
    products: [],
    cart: [],
    modelOpen: false,
    modelProduct: detailedProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    this.state.productData.forEach((item) => {
      let singleproduct = item;
      tempProducts = [...tempProducts, singleproduct];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    let product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({ productDetail: product });
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.incart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModel = (id) => {
    const product = this.getItem(id);
    this.setState({
      modelProduct: product,
      modelOpen: true,
    });
  };
  closeModel = () => {
    this.setState({ modelOpen: false });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.incart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    let tempProduct = this.state.products.map(
      (product) => (product.incart = false)
    );
    this.setState(
      () => {
        return {
          cart: [],
          products: tempProduct,
        };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let minTotal = this.state.cart.map((item) => item.total);
    let subTotal = minTotal.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    let tempTax = subTotal * 0.1;
    let tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
          openModel: this.openModel,
          closeModel: this.closeModel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
