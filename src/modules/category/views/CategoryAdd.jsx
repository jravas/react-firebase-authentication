import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../redux/actions";

class CategoryAdd extends Component {
  state = { name: "" };
  submitAction = event => {
    const { addCategory } = this.props;
    const { name } = this.state;
    event.preventDefault();
    addCategory(name);
    this.setState({ name: "" });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.submitAction}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary float-right">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addCategory }
)(CategoryAdd);
