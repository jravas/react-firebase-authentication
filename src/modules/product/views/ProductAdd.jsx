import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions";
// todo action for categories
import { fetchCategories } from "../../category/redux/actions";

class ProductAdd extends Component {
  state = {
    name: "",
    picture: null,
    pictureUrl: null,
    category: "",
    price: ""
  };
  submitAction = event => {
    const { addProduct } = this.props;
    const { name, category, picture, price } = this.state;
    event.preventDefault();
    addProduct(name, category, picture, price);
    this.setState({
      name: "",
      picture: null,
      pictureUrl: null,
      category: "",
      price: ""
    });
  };
  fileSelectedHandler = event => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({ picture: file, pictureUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };
  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    const { categories } = this.props;
    const { name, pictureUrl, price } = this.state;
    return (
      <div>
        <div>{pictureUrl && <img src={pictureUrl} alt="Product" />}</div>
        <form onSubmit={this.submitAction}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              value={price}
              onChange={event => this.setState({ price: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control"
              onChange={this.fileSelectedHandler}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="categorySelect">
                Select Category
              </label>
            </div>
            <select
              className="custom-select"
              id="categorySelect"
              onChange={event =>
                this.setState({ category: event.target.value })
              }
            >
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
