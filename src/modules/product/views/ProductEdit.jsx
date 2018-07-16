import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct, updateProduct } from "../redux/actions";
import { fetchCategories } from "../../category/redux/actions";

class ProductEdit extends Component {
  state = {
    name: "",
    category: "",
    product: ""
  };
  submitAction = event => {
    const { id } = this.props.match.params;
    const { updateProduct } = this.props;
    const { name, category } = this.state;
    event.preventDefault();
    updateProduct(id, name, category);
  };
  componentWillMount() {
    const { fetchCategories, fetchProduct } = this.props;
    const { id } = this.props.match.params;
    fetchCategories();
    fetchProduct(id);
  }
  componentDidUpdate(prevProps) {
    const { name, category } = this.props.product;
    if (this.props.product !== prevProps.product) {
      this.setState({ name: name, category: category });
    }
  }

  render() {
    const { categories } = this.props;
    const { name, category } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.submitAction}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="categorySelect">
                    Options
                  </label>
                </div>
                <select
                  className="custom-select"
                  id="categorySelect"
                  value={category}
                  onChange={event =>
                    this.setState({ category: event.target.value })
                  }
                >
                  {categories &&
                    Object.keys(categories).map(key => (
                      <option
                        key={categories[key].id}
                        value={categories[key].name}
                      >
                        {categories[key].name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <button className="btn btn-primary float-right">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const actions = { fetchCategories, fetchProduct, updateProduct };

const mapStateToProps = state => ({
  categories: state.categoriesState.categories,
  product: state.productsState.products
});

export default connect(
  mapStateToProps,
  actions
)(ProductEdit);
