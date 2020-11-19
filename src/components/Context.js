import React, { Component } from "react";
import { productsData } from "./ProductsData";

import { SevitaData, detailedProduct } from "./sevita/SevitaData";
//import { HybrideData } from "./hybrideProducts/HybrideData";

const ProductContext = React.createContext();
//const productsData = [SevitaData, HybrideData];

class ProductProvider extends Component {
  state = {
    productData: productsData,
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
    //let tempSingleProdcut = [];

    productsData.forEach((item) => {
      const singleproduct = [...item.data];
      console.log(singleproduct);
      tempProducts = [...tempProducts, singleproduct];
      console.log(tempProducts);
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  getProduct = (id) =>{
    let product = this.productData.find(item => item.id === id)
    return product
  }
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
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.Total));
    let tempTax = subTotal.NaN * 0.1;
    let tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal.NaN + tax;
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
