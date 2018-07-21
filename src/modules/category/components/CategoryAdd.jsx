import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../redux/actions";
import cancleImg from "../../../main/images/cancel.svg";

class CategoryAdd extends Component {
  state = { name: "" };
  submitAction = event => {
    const { addCategory } = this.props;
    const { name } = this.state;
    event.preventDefault();
    addCategory(name);
    this.setState({ name: "" });
  };
  closeModal(e) {
    e.preventDefault();
    this.props.closeModal({ modal: false });
  }
  render() {
    const { name } = this.state;
    return (
      <div className="item-add">
        <div className="form-container">
          <div
            className="item-add__cancel"
            onClick={this.closeModal.bind(this)}
          >
            <img src={cancleImg} alt="Cancel" />
          </div>
          <form className="form-container__form" onSubmit={this.submitAction}>
            <input
              className="form-container__form__input"
              type="text"
              placeholder="Enter category name"
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
            />
            <button className="default-button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addCategory }
)(CategoryAdd);
