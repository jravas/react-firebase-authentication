import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { addCategory } from "../redux/actions";
import cancleImg from "../../../main/assets/images/cancel.svg";
import defaultToastConfig from "@/main/constants/defaultToastConfig";

const INITIAL_STATE = {
  name: "",
  toastConfig: defaultToastConfig
};

class CategoryAdd extends Component {
  state = { ...INITIAL_STATE };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitAction = event => {
    const { addCategory, closeModal } = this.props;
    const { name, toastConfig } = this.state;

    addCategory(name).then(() => {
      this.setState({ ...INITIAL_STATE });
      closeModal({ modal: false });
      toast(`${name} added !`, toastConfig);
    });
  };

  closeModal = event => {
    const { closeModal } = this.props;
    closeModal({ modal: false });
  };

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
