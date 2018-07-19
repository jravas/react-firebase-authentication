import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "../../main/components/withAuthorization";
class Admin extends Component {
  render() {
    const { authUser } = this.props;
    console.log(authUser.email === "josip.ravas.broj@gmail.com");
    return (
      <div className="container">
        <div className="row">
          <div className="col">test</div>
        </div>
      </div>
    );
  }
}
const authCondition = authUser =>
  authUser.email === "josip.ravas.broj@gmail.com";
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(Admin);
