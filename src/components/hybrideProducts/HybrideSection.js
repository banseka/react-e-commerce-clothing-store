import React, { Component } from "react";
import Title from "../Title";
import Product from "../Product";
//import { ProductConsumer } from "../Context";
import { getHybride } from "../../actions/Action";
import { connect } from "react-redux";

class HybrideSection extends Component {
  componentDidMount() {
    this.props.getHybride();
  }
  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='Hybride' title='products' />
            <div className='row'>
              {this.props.hybride.map((item) => {
                return <Product key={item.id} product={item} />;
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  hybride: state.hybride.product,
});

export default connect(mapStateToProps, { getHybride })(HybrideSection);
