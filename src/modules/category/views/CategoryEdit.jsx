import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "@/main/components/withAuthorization";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import defaultToastConfig from "@/main/constants/defaultToastConfig";
import { fetchCategory, updateCategory } from "../redux/actions";
import * as routes from "@/main/constants/routes";
import admin from "@/main/constants/hardCodedAdmin";

const INITIAL_STATE = { name: " ", toastConfig: defaultToastConfig };

class CategoryEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.submitAction = this.submitAction.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  submitAction(event) {
    const { id } = this.props.match.params;
    const { updateCategory, history } = this.props;
    const { name, toastConfig } = this.state;
    event.preventDefault();
    updateCategory(id, name).then(() => {
      history.push(routes.ADMIN_CATEGORIES);
      toast(`${name} edited !`, toastConfig);
    });
  }
  componentWillMount() {
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
        <form className="form-container__form" onSubmit={this.submitAction}>
          <input
            className="form-container__form__input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
          />
          <button className="default-button">Update</button>
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
