import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "@/main/components/withAuthorization";
import * as actions from "../redux/actions";
// add category component
import AddCategory from "../components/CategoryAdd";
import CategoriesList from "../components/CategoriesList";
import AddButton from "@/main/components/AddButton";

const INITIAL_STATE = { modal: false };

class AdminCategoryPage extends Component {
  state = { ...INITIAL_STATE };
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    const { categories } = this.props;
    const { modal } = this.state;
    return (
      <div>
        {modal && <AddCategory closeModal={this.setState.bind(this)} />}
        <CategoriesList categories={categories} />
        <AddButton openModal={this.setState.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesState.categories
});

const authCondition = authUser => !!authUser;
export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    actions
  )
)(AdminCategoryPage);
