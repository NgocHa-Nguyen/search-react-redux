import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataList } from "../actions/indexAction";

class Index extends Component {
   constructor(props){
        super(props);
        this.state = {
            search: ""
          };
        this.updatedList = this.updatedList.bind(this);
   }
  componentDidMount() {
    this.props.actionGetData();
  }

  updatedList(event){
    console.log(event.target.value.toLowerCase());
    this.setState({
        search: event.target.value
      });
  }

  renderTitle = user => {
      const {search} = this.state;
      if( search !== "" && user.name.indexOf(search.toLowerCase) === -1){
        return null;
      }
  }

  listUser() {
    const users = this.props.users.APIdata;
    if (users.length > 0) {
      return users.map((user, index) => (
        <div>
          <ul>
            <li>
              <h4>{user.title}</h4>
            </li>
          </ul>
        </div>
      ));
    } else return 0;
  }

  render() {
      const {search} = this.state;
    //   const filteredTitle = users.filter(user => {
    //       return user.title.indexOf(search.toLowerCase() !== -1)
    //   })
    return (
      <div className="row">
        <form>
          <label>Seacrh</label>
          <input onChange={this.updatedList}></input>
        </form>
        {this.listUser()}
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
