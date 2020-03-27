import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataList, detailUser, sumResult } from "../actions/indexAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Demo from "./demo";
import SearchField from 'react-search-field';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "", 
      users: this.props.users,
      isResult : 0
    };
    this.updatedList = this.updatedList.bind(this);
    this.callbackHandleOnClick = this.callbackHandleOnClick.bind(this);

  }
  
  componentDidMount() {
    console.log(this.props.match)
    this.props.actionGetData();
  }

  onDetail(id) {
    console.log(id);
    this.props.actionDetailUser(id);
  }

  listUser() {
    const users = this.props.users.APIdata;
    if (users.length > 0) {
      return users.map((user, index) => (
        <div>
          <ul>
            <li>
              <Link to="/detail" onClick={() => this.onDetail(user.id)}>
                {user.title}
              </Link>
            </li>
          </ul>
        </div>
      ));
    } else return 0;
  }

  updatedList(event) {

  }
  callbackHandleOnClick (result){
    this.setState({
      isResult : result
    })
    console.log(result);  }
  
  render() {
    console.log(this.props);
    return (
      <div className="row">
          <SearchField 
              placeholder='Search item'
              onChange={this.updatedList}
            />
          <label>Search</label>
          <input onChange={this.updatedList}></input>
          <Demo handelOnClickParent = {this.callbackHandleOnClick}>
          
          </Demo>
          <h1>{this.state.isResult}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actionGetData: () => {
      dispatch(getDataList());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
