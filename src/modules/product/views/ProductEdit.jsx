import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct, updateProduct } from "../redux/actions";
import { fetchCategories } from "@/modules/category/redux/actions";

const INITIAL_STATE = { name: "", category: "", product: "" };

class ProductEdit extends Component {
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
    const { updateProduct } = this.props;
    const { name, category } = this.state;
    event.preventDefault();
    updateProduct(id, name, category);
  }
  componentWillMount() {
    const { fetchCategories, fetchProduct } = this.props;
    const { id } = this.props.match.params;
    fetchCategories();
    fetchProduct(id);
  }
  componentDidUpdate(prevProps) {
    const { name, category, imageUrl } = this.props.product;
    if (this.props.product !== prevProps.product) {
      this.setState({ name: name, category: category, imageUrl: imageUrl });
    }
  }

  render() {
    const { categories } = this.props;
    const { name, category, imageUrl } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col">
            <img src={imageUrl} alt="Product" />
            <form onSubmit={this.submitAction}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleInput}
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
                  name="category"
                  value={category}
                  onChange={this.handleInput}
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
