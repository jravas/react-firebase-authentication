import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions";
// todo action for categories
import { fetchCategories } from "@/modules/category/redux/actions";
import cancleImg from "../../../main/images/cancel.svg";

const INITIAL_STATE = {
  name: "",
  description: "",
  picture: null,
  pictureUrl: null,
  category: "",
  price: ""
};
class ProductAdd extends Component {
  state = { ...INITIAL_STATE };
  closeModal(e) {
    e.preventDefault();
    this.props.closeModal({ modal: false });
  }
  submitAction = event => {
    const { addProduct } = this.props;
    const { name, description, category, picture, price } = this.state;
    event.preventDefault();
    addProduct(name, description, category, picture, price);
    this.setState({ ...INITIAL_STATE });
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
    const { name, description, pictureUrl, price } = this.state;
    return (
      <div className="item-add">
        <div className="form-container">
          <div
            className="item-add__cancel"
            onClick={this.closeModal.bind(this)}
          >
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
            <div className="form-container__form__wrap">
              <select
                className="form-container__form__wrap__select"
                id="categorySelect"
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
            <textarea
              className="form-container__form__textarea"
              value={description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
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
