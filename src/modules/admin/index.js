import React, { Component } from "react";
import { connect } from "react-redux";
class Admin extends Component {
  render() {
    return (
      <div>
        <div>test</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});
export default connect(mapStateToProps)(Admin);
