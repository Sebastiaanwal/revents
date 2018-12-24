import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementAsynch, decrementAsynch } from "./testActions";
import { openModal } from "../modals/modalActions";

const mapState = state => ({
  data: state.test.data, 
  loading: state.test.loading
});

const actions = {
  incrementAsynch,
  decrementAsynch,
  openModal
};

class TestComponent extends Component {
  render() {
    const { incrementAsynch, decrementAsynch, data, openModal, loading } = this.props;
    return (
      <div>
        <h1> test Area</h1>
        <h3>the answer is: {this.props.data}</h3>
        <Button loading={loading} onClick={incrementAsynch} color="green" content="Increment" />
        <Button loading={loading} onClick={decrementAsynch} color="red" content="Decrement" />
        <Button
          onClick={() => openModal("TestModal", { data: 43 })}
          color="teal"
          content="open modal"
        />
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
