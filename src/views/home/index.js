import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "../../components/withAuthorization";
import { AddProduct, ListProducts } from "../../components/product/";
import { db } from "../../firebase";

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers, onSetProducts } = this.props;
    db.onceGetUsers().then(snapshot => onSetUsers(snapshot.val()));
    db.onceGetProducts().then(snapshot => onSetProducts(snapshot.val()));
  }
  render() {
    const { users, products } = this.props;
    return (
      <div className="container">
        <h1>Home</h1>
        <AddProduct />
        <p>The Home Page is accessible by every signed in user.</p>
        {!!users && <UserList users={users} />}
        {!!products && <ListProducts products={products} />}
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
  users: state.userState.users,
  products: state.productsState.products
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users }),
  onSetProducts: products => dispatch({ type: "PRODUCTS_SET", products })
});

const authCondition = authUser => !!authUser;
export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage);
