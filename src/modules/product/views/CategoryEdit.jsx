import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCategory, updateCategory } from "../redux/actions";

class CategoryEdit extends Component {
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
    const { id } = this.props.match.params;
    const { updateCategory } = this.props;
    const { name } = this.state.form;

    this.checkInputs();
    if (name.length) {
      updateCategory(id, name);
    }
  };

  componentDidMount() {
    const { fetchCategory } = this.props;
    const { id } = this.props.match.params;
    fetchCategory(id);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props.category;
    if (this.props.category !== prevProps.category) {
      this.setState({ form: { name: name } });
    }
  }

  render() {
    const { name } = this.state.form;
    const { errors } = this.state;
    return (
      <div className="form-container">
        <form className="form-container__form">
          <input
            className="form-container__form__input"
            type="text"
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
            Update
          </button>
        </form>
      </div>
    );
  }
}

const actions = { fetchCategory, updateCategory };

const mapStateToProps = state => ({
  category: state.categoriesState.categories
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(CategoryEdit));
