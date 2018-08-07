import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions";
import { fetchCategories } from "@/modules/product/redux/actions";

const INITIAL_STATE = {
  discountActive: false,
  pictureUrl: "",
  form: {
    name: "",
    description: "",
    picture: "",
    category: "Uncategorised",
    price: "",
    actionPrice: 0
  },
  errors: {
    name: false,
    description: false,
    picture: false,
    category: false,
    price: false,
    actionPrice: false
  }
};
class AdminProductAdd extends Component {
  state = { ...INITIAL_STATE };

  // setting inputs to product state
  handleInput = event => {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value }
    });
  };
  // add action price
  handleRadio = event => {
    const { discountActive } = this.state;
    this.setState({ discountActive: !discountActive });
  };

  // check if inputs are filled
  checkInputs = () => {
    const { form, errors } = this.state;
    let inputs = {};

    Object.keys(form).map(
      key =>
        form[key].length === 0 ? (inputs[key] = true) : (inputs[key] = false)
    );
    this.setState({ errors: { ...errors, ...inputs } });
  };

  // adding product
  submitAction = event => {
    const { addProduct, onClick } = this.props;
    const { discountActive } = this.state;
    const {
      name,
      description,
      category,
      picture,
      price,
      actionPrice
    } = this.state.form;

    // set action price if price is empyt string
    let aPrice = actionPrice;
    if (!actionPrice && actionPrice.length === 0) {
      aPrice = 0;
    }
    // if no disscount set price to 0
    if (!discountActive) {
      aPrice = 0;
    }

    // image is object and doesn't have length
    let img = typeof picture === "object" ? true : false;
    this.checkInputs();

    if (
      name.length &&
      description.length &&
      category.length &&
      img &&
      price.length
    ) {
      addProduct(
        name,
        description,
        category,
        picture,
        price,
        aPrice,
        discountActive
      );
      // close modal
      onClick();
    }
  };

  // product image upload
  fileSelectedHandler = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        pictureUrl: reader.result,
        form: { ...this.state.form, picture: file }
      });
    };
    reader.readAsDataURL(file);
  };

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { categories, onClick } = this.props;
    const { pictureUrl, errors, discountActive } = this.state;
    const { name, description, price, category, actionPrice } = this.state.form;
    return (
      <div className="item-add">
        <div className="form-container">
          <button
            type="button"
            className="item-add__cancel"
            onClick={onClick}
          />
          {!pictureUrl ? null : (
            <div className="item-add__image">
              <img src={pictureUrl} alt="Product" />
            </div>
          )}
          <form className="form-container__form">
            <input
              className="form-container__form__input"
              placeholder="Product name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            />
            {errors.name ? (
              <p className="form-container__form__error">
                This field is required !
              </p>
            ) : null}
            <input
              className="form-container__form__input"
              placeholder="Product price"
              type="number"
              name="price"
              value={price}
              onChange={this.handleInput}
            />
            {errors.price ? (
              <p className="form-container__form__error">
                This field is required !
              </p>
            ) : null}
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
            {discountActive ? (
              <input
                className="form-container__form__input"
                placeholder="Discount price"
                type="number"
                name="actionPrice"
                value={actionPrice}
                onChange={this.handleInput}
              />
            ) : null}
            <div className="form-container__form__wrap">
              <select
                className="form-container__form__wrap__select"
                id="categorySelect"
                name="category"
                onChange={this.handleInput}
                value={category}
              >
                {!categories
                  ? null
                  : Object.keys(categories).map(key => (
                      <option
                        key={categories[key].id}
                        value={categories[key].name}
                      >
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
            {errors.description ? (
              <p className="form-container__form__error">
                This field is required !
              </p>
            ) : null}
            <input
              className="form-container__form__file"
              type="file"
              onChange={this.fileSelectedHandler}
            />
            {errors.picture ? (
              <p className="form-container__form__error">
                Product image is required !
              </p>
            ) : null}
            <button
              className="default-button"
              type="button"
              onClick={this.submitAction}
            >
              Add product
            </button>
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
)(AdminProductAdd);
