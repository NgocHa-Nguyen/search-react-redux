import React, { Component } from "react";
import { connect } from "react-redux";


class userDetail extends Component {

  componentDidMount(){
    const {match: {params}} = this.props;
  }
  render() {
    
    return (
      <div>
        <h4>Title : {this.props.users.title}</h4>
        <h4>Body : {this.props.users.title}</h4>
        <h4>UserId  : {this.props.users.title}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.currenUser
  };
};

export default connect(mapStateToProps)(userDetail);
