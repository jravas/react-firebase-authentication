import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class CategoryList extends Component {
  handleClickAction = categoryId => {
    const { deleteCategory } = this.props;
    deleteCategory(categoryId);
  };
  render() {
    return (
      <ul className="list-group">
        {this.props.categories &&
          Object.keys(this.props.categories).map(key => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={key}
              onClick={() =>
                this.handleClickAction(this.props.categories[key].id)
              }
            >
              {this.props.categories[key].name}
            </li>
          ))}
      </ul>
    );
  }
}

export default connect(
  null,
  actions
)(CategoryList);
