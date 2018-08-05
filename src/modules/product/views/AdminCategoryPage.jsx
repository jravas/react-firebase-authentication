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
  // open add product modal
  openModal = event => {
    this.setState({ modal: true });
  };
  // close modal action
  closeModal = event => {
    this.setState({ modal: false });
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
        {modal ? <AdminCategoryAdd onClick={this.closeModal} /> : null}
        <AdminCategoriesList
          categories={categories}
          handleClickAction={this.handleClickAction}
        />
        <AddButton onClick={this.openModal} />
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
