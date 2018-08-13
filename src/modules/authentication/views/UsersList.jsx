import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { UserItem } from "../components/UserItem";

class UsersList extends Component {
  componentDidMount() {
    const { ListUsers } = this.props;
    ListUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <ul className="items-list-admin container-style">
        {users.map(item => <UserItem user={item} key={item.id} />)}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersState.users
});

export default connect(
  mapStateToProps,
  actions
)(UsersList);
