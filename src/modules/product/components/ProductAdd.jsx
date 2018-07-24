import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions";
import { toast } from "react-toastify";
import defaultToastConfig from "@/main/constants/defaultToastConfig";
import { fetchCategories } from "@/modules/category/redux/actions";
import cancleImg from "@/main/images/cancel.svg";

const INITIAL_STATE = {
  name: "",
  description: "",
  picture: "",
  pictureUrl: "",
  category: "",
  price: "",
  toastConfig: defaultToastConfig
};
class ProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.closeModal = this.closeModal.bind(this);
    this.submitAction = this.submitAction.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }
  // setting inputs to product state
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  // close modal action
  closeModal(e) {
    const { closeModal } = this.props;
    e.preventDefault();
    closeModal({ modal: false });
  }
  // adding product
  submitAction(event) {
    const { addProduct, closeModal } = this.props;
    const {
      name,
      description,
      category,
      picture,
      price,
      toastConfig
    } = this.state;
    event.preventDefault();
    addProduct(name, description, category, picture, price).then(() => {
      this.setState({ ...INITIAL_STATE });
      closeModal({ modal: false });
      toast(`${name} added !`, toastConfig);
    });
  }
  // product image upload
  fileSelectedHandler(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({ picture: file, pictureUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }
  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }
  render() {
    const { categories } = this.props;
    const { name, description, pictureUrl, price } = this.state;
    return (
      <div className="item-add">
        <div className="form-container">
          <div className="item-add__cancel" onClick={this.closeModal}>
            <img src={cancleImg} alt="Cancel" />
          </div>
          {pictureUrl && (
            <div className="item-add__image">
              <img src={pictureUrl} alt="Product" />
            </div>
          )}
          <form className="form-container__form" onSubmit={this.submitAction}>
            <input
              className="form-container__form__input"
              placeholder="Product name"
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
            <textarea
              className="form-container__form__textarea"
              name="description"
              value={description}
              onChange={this.handleInput}
              cols="30"
              rows="10"
            />
            <input type="file" onChange={this.fileSelectedHandler} />
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
