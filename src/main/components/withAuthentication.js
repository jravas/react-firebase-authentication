import React from "react";
import { firebase } from "../firebase";
import { connect } from "react-redux";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null,
      loading: true
    };
    componentDidMount() {
      const { onSetAuthUser } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
        this.setState({ loading: false });
      });
    }

    render() {
      const { loading } = this.state;
      return loading ? <div className="loader" /> : <Component />;
    }
  }
  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
  });

  return connect(
    null,
    mapDispatchToProps
  )(WithAuthentication);
};

export default withAuthentication;
