import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "@/main/components/withAuthorization";
import { withRouter } from "react-router-dom";
import { fetchCategory, updateCategory } from "../redux/actions";
import admin from "@/main/constants/hardCodedAdmin";

class CategoryEdit extends Component {
  state = { name: " " };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitAction = event => {
    const { id } = this.props.match.params;
    const { updateCategory } = this.props;
    const { name } = this.state;

    updateCategory(id, name);
  };

  componentDidMount() {
    const { fetchCategory } = this.props;
    const { id } = this.props.match.params;
    fetchCategory(id);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props.category;
    if (this.props.category !== prevProps.category) {
      this.setState({ name: name });
    }
  }

  render() {
    const { name } = this.state;
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

const authCondition = authUser => authUser.email === admin.mail;
export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    actions
  )
)(withRouter(CategoryEdit));
