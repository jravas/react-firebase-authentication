import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions";
// todo action for categories
import { fetchCategories } from "../../../actions";

class ProductAdd extends Component {
  state = { name: "", category: "Uncategorised" };
  submitAction = event => {
    const { addProduct } = this.props;
    const { name, category } = this.state;
    event.preventDefault();
    addProduct(name, category);
    this.setState({ name: "" });
  };
  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    const { categories } = this.props;
    // const { category, name } = this.state;
    return (
      <div>
        <form onSubmit={this.submitAction}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </label>
            </div>
            <select
              className="custom-select"
              onChange={event =>
                this.setState({ category: event.target.value })
              }
            >
              <option key="1" value="Uncategorised" selected>
                Uncategorised
              </option>
              {categories &&
                Object.keys(categories).map(key => (
                  <option key={categories[key].id} value={categories[key].name}>
                    {categories[key].name}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary float-right">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesState.categories
});

const actions = { fetchCategories, addProduct };

export default connect(
  mapStateToProps,
  actions
)(ProductAdd);
