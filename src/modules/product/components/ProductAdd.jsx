import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions";
// todo action for categories
import { fetchCategories } from "@/modules/category/redux/actions";
import cancleImg from "../../../main/images/cancel.svg";

class ProductAdd extends Component {
  state = {
    name: "",
    picture: null,
    pictureUrl: null,
    category: "",
    price: ""
  };
  closeModal(e) {
    e.preventDefault();
    this.props.closeModal({ modal: false });
  }
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
      <div className="item-add">
        <div className="form-container">
          <div
            className="item-add__cancel"
            onClick={this.closeModal.bind(this)}
          >
            <img src={cancleImg} alt="Cancel" />
          </div>
          <div>{pictureUrl && <img src={pictureUrl} alt="Product" />}</div>
          <form className="form-container__form" onSubmit={this.submitAction}>
            <input
              className="form-container__form__input"
              placeholder="Product name"
              type="text"
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
            />
            <input
              className="form-container__form__input"
              placeholder="Product price"
              type="number"
              value={price}
              onChange={event => this.setState({ price: event.target.value })}
            />
            <input type="file" onChange={this.fileSelectedHandler} />
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
            <button className="default-button">Add product</button>
          </form>
        </div>
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
