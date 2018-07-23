import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../redux/actions";
import cancleImg from "../../../main/images/cancel.svg";

const INITIAL_STATE = {
  name: ""
};

class CategoryAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.submitAction = this.submitAction.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
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
          <div className="item-add__cancel" onClick={this.closeModal}>
            <img src={cancleImg} alt="Cancel" />
          </div>
          <form className="form-container__form" onSubmit={this.submitAction}>
            <input
              className="form-container__form__input"
              type="text"
              placeholder="Enter category name"
              name="name"
              value={name}
              onChange={this.handleInput}
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
