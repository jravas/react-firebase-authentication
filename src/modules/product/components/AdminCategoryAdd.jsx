import React, { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../redux/actions";

class AdminCategoryAdd extends Component {
  state = { form: { name: "" }, errors: { name: false } };

  handleInput = event => {
    this.setState({ form: { [event.target.name]: event.target.value } });
  };

  // check if inputs are filled
  checkInputs = () => {
    const { form, errors } = this.state;
    let inputs = {};

    Object.keys(form).map(
      key =>
        form[key].length === 0 ? (inputs[key] = true) : (inputs[key] = false)
    );
    this.setState({ errors: { ...errors, ...inputs } });
  };

  submitAction = event => {
    const { addCategory, onClick } = this.props;
    const { name } = this.state.form;

    this.checkInputs();
    if (name.length) {
      addCategory(name);
      // close modal
      onClick();
    }
  };

  render() {
    const { name } = this.state.form;
    const { errors } = this.state;
    const { onClick } = this.props;
    return (
      <div className="item-add">
        <div className="form-container">
          <button
            type="button"
            className="item-add__cancel"
            onClick={onClick}
          />
          <form className="form-container__form">
            <input
              className="form-container__form__input"
              type="text"
              placeholder="Enter category name"
              name="name"
              value={name}
              onChange={this.handleInput}
            />
            {errors.name ? (
              <p className="form-container__form__error">
                This field is required !
              </p>
            ) : null}
            <button
              className="default-button"
              type="button"
              onClick={this.submitAction}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addCategory }
)(AdminCategoryAdd);
