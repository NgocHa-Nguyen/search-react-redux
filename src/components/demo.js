import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
    this.handelOnClick = this.handelOnClick.bind(this);
  }

  handelOnClick() {
    let result = this.state.result;
    result++;
    this.setState({ result });
    this.props.handelOnClickParent(result)
  }
  render() {
    return (
      <div>
        <button onClick={this.handelOnClick}>Click me !! </button>
      </div>
    );
  }
}

export default Demo; 
