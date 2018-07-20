import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "@/main/components/withAuthorization";
import * as actions from "./redux/actions";
// add category component
import AddCategory from "./views/CategoryAdd";
import CategoriesList from "./views/CategoriesList";

class CategoriesPage extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    const { categories } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <AddCategory />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <CategoriesList categories={categories} />
          </div>
        </div>
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
)(CategoriesPage);
