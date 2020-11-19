import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAction } from "./actions/updateAction";
import { changeAction } from "./actions/changeAction";

class ReduxTest extends Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleUpdate() {
    this.props.updateAction();
  }
  handleChange() {
    this.props.changeAction("master");
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <button onClick={this.handleUpdate} className='btn btn-danger'>
          update
        </button>
        <h1>{this.props.update.mark}</h1>
        <button onClick={this.handleChange} className='btn btn-primary'>
          change
        </button>
        <h2>{this.props.change.mark}</h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    change: state.change,
    update: state.update,
  };
};

export default connect(mapStateToProps, {changeAction, updateAction})(ReduxTest);
