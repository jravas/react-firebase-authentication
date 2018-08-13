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
  imageChanged: false,
  actionPrice: 0,
  discountActive: false,
  errors: {
    name: false,
    description: false,
    price: false
  }
};

class ProductEdit extends Component {
  state = { ...INITIAL_STATE };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // add action price
  handleRadio = event => {
    const { discountActive } = this.state;
    this.setState({ discountActive: !discountActive });
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

  // check if inputs are filled
  checkInputs = () => {
    const { errors } = this.state;
    const { name, description, price } = this.state;
    let form = { name, description, price };
    let inputs = {};

    Object.keys(form).map(
      key =>
        form[key].length === 0 ? (inputs[key] = true) : (inputs[key] = false)
    );
    this.setState({ errors: { ...errors, ...inputs } });
  };

  // edit product submit action
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
      imageChanged,
      actionPrice,
      discountActive
    } = this.state;
    // set action price if price is empyt string
    let aPrice = actionPrice;
    if (!actionPrice && actionPrice.length === 0) {
      aPrice = 0;
    }
    // if no disscount set price to 0
    if (!discountActive) {
      aPrice = 0;
    }
    this.checkInputs();
    if (name.length && description.length && price.length) {
      // if image changed send image
      imageChanged
        ? updateProduct(
            id,
            name,
            description,
            category,
            picture,
            price,
            aPrice,
            discountActive
          )
        : // else send old image url
          updateProduct(
            id,
            name,
            description,
            category,
            imageUrl,
            price,
            aPrice,
            discountActive
          );
    }
  };

  componentDidMount() {
    const { fetchCategories, fetchProduct } = this.props;
    const { id } = this.props.match.params;
    fetchCategories();
    fetchProduct(id);
  }

  componentDidUpdate(prevProps) {
    const {
      name,
      description,
      category,
      price,
      imageUrl,
      actionPrice,
      discountActive
    } = this.props.product;
    if (this.props.product !== prevProps.product) {
      this.setState({
        name: name,
        description: description,
        category: category,
        price: price,
        imageUrl: imageUrl,
        actionPrice: actionPrice,
        discountActive: discountActive
      });
    }
  }
  render() {
    const { categories } = this.props;
    const {
      name,
      description,
      price,
      category,
      imageUrl,
      errors,
      actionPrice,
      discountActive
    } = this.state;
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
            {errors.name && (
              <p className="form-container__form__error">
                This field is required !
              </p>
            )}
            <input
              className="form-container__form__input"
              placeholder="Product price"
              type="number"
              name="price"
              value={price}
              onChange={this.handleInput}
            />
            {errors.price && (
              <p className="form-container__form__error">
                This field is required !
              </p>
            )}
            <div className="form-container__form__discount">
              <span>Discount:</span>
              <label htmlFor="action">
                <input
                  type="radio"
                  name="action"
                  value={discountActive}
                  onChange={this.handleRadio}
                  checked={discountActive === true}
                />
                Yes
              </label>
              <label htmlFor="action">
                <input
                  type="radio"
                  name="action"
                  value={discountActive}
                  onChange={this.handleRadio}
                  checked={discountActive === false}
                />
                No
              </label>
            </div>
            {discountActive && (
              <input
                className="form-container__form__input"
                placeholder="Discount price"
                type="number"
                name="actionPrice"
                value={actionPrice}
                onChange={this.handleInput}
              />
            )}
            <div className="form-container__form__wrap">
              <select
                className="form-container__form__wrap__select"
                id="categorySelect"
                name="category"
                value={category}
                onChange={this.handleInput}
              >
                {!categories.length
                  ? null
                  : categories.map(item => (
                      <option key={item.id} value={item.name}>
                        {item.name}
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
            {errors.description && (
              <p className="form-container__form__error">
                This field is required !
              </p>
            )}
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
  product: state.productsState.product
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(ProductEdit));
