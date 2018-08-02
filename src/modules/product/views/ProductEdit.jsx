import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProduct, updateProduct } from "../redux/actions";
import { fetchCategories } from "@/modules/product/redux/actions";

const INITIAL_STATE = {
  name: "",
  description: "",
  price: "",
  category: "",
  product: "",
  picture: "",
  imageUrl: "",
  imageChanged: false
};

class ProductEdit extends Component {
  state = { ...INITIAL_STATE };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // product image upload
  fileSelectedHandler = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        picture: file,
        imageUrl: reader.result,
        imageChanged: true
      });
    };
    reader.readAsDataURL(file);
  };

  submitAction = event => {
    const { id } = this.props.match.params;
    const { updateProduct } = this.props;
    const {
      name,
      description,
      category,
      picture,
      imageUrl,
      price,
      imageChanged
    } = this.state;

    // if image changed send image
    imageChanged
      ? updateProduct(id, name, description, category, picture, price)
      : // else send old image url
        updateProduct(id, name, description, category, imageUrl, price);
  };

  componentDidMount() {
    const { fetchCategories, fetchProduct } = this.props;
    const { id } = this.props.match.params;
    fetchCategories();
    fetchProduct(id);
  }

  componentDidUpdate(prevProps) {
    const { name, description, category, price, imageUrl } = this.props.product;
    if (this.props.product !== prevProps.product) {
      this.setState({
        name: name,
        description: description,
        category: category,
        price: price,
        imageUrl: imageUrl
      });
    }
  }
  render() {
    const { categories } = this.props;
    const { name, description, price, category, imageUrl } = this.state;
    return (
      <div className="product-single container-style">
        <div className="product-single__image">
          <img src={imageUrl} alt="Product" />
        </div>
        <div className="product-single__info">
          <form className="form-container__form">
            <input
              className="form-container__form__input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            />
            <input
              className="form-container__form__input"
              placeholder="Product price"
              type="number"
              name="price"
              value={price}
              onChange={this.handleInput}
            />
            <div className="form-container__form__wrap">
              <select
                className="form-container__form__wrap__select"
                id="categorySelect"
                name="category"
                value={category}
                onChange={this.handleInput}
              >
                {!categories
                  ? null
                  : Object.keys(categories).map(key => (
                      <option key={key} value={categories[key].name}>
                        {categories[key].name}
                      </option>
                    ))}
              </select>
            </div>
            <textarea
              className="form-container__form__textarea"
              name="description"
              value={description}
              onChange={this.handleInput}
              cols="30"
              rows="10"
            />
            <input type="file" onChange={this.fileSelectedHandler} />
            <button
              type="button"
              className="default-button"
              onClick={this.submitAction}
            >
              Update
            </button>
          </form>
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
)(withRouter(ProductEdit));
