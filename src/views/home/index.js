import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "../../main/components/withAuthorization";
// import { db } from "../../main/firebase";

class HomePage extends Component {
  componentDidMount() {
    // const { onSetUsers } = this.props;
    // db.onceGetUsers().then(snapshot => onSetUsers(snapshot.val()));
  }
  render() {
    const { users } = this.props;
    return (
      <div className="container">
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        {!!users && <UserList users={users} />}
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of Usernames of Users</h2>
    {Object.keys(users).map(key => <div key={key}>{users[key].username}</div>)}
    <hr />
  </div>
);

const mapStateToProps = state => ({
  users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

const authCondition = authUser => !!authUser;
export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage);
