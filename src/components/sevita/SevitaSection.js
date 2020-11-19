import React, { Component } from "react";
import Title from "../Title";
import Product from "../Product";
import { ProductConsumer } from "../Context";
import { getSevita } from "../../actions/Action";
import { connect } from "react-redux";
import { SevitaData } from "./SevitaData";

class SevitaSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: SevitaData,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='sevita' title='products' />
            <div className='row'>
              <ProductConsumer>
                {(value)=> {
                  value.products[1].map(item => (<Product key={item.id} product={item} />) )
                }
                  
              }
              </ProductConsumer>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  sevita: state.sevita.product,
});

export default connect(mapStateToProps, { getSevita })(SevitaSection);
