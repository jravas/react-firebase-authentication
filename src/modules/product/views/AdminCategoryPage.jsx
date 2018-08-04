import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
// add category component
import AdminCategoryAdd from "../components/AdminCategoryAdd";
import { AdminCategoriesList } from "../components/AdminCategoriesList";
import { AddButton } from "@/main/components/AddButton";

class AdminCategoryPage extends Component {
  state = { modal: false };

  // delete category
  handleClickAction = event => {
    const { deleteCategory } = this.props;
    const { itemId } = event.target.dataset;
    deleteCategory(itemId);
  };

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { categories } = this.props;
    const { modal } = this.state;
    return (
      <div>
        {modal ? (
          <AdminCategoryAdd closeModal={this.setState.bind(this)} />
        ) : null}
        <AdminCategoriesList
          categories={categories}
          handleClickAction={this.handleClickAction}
        />
        <AddButton openModal={this.setState.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesState.categories
});

export default connect(
  mapStateToProps,
  actions
)(AdminCategoryPage);
