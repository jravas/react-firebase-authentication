import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Downshift from "downshift";
import { connect } from "react-redux";
import * as actions from "@/modules/product/redux/actions";

class Search extends Component {
  componentDidMount() {
    const { fetchProductsArr } = this.props;
    fetchProductsArr();
  }
  itemSelected(selected) {
    const { history } = this.props;
    selected && history.push(`/product/${selected.id}`);
  }
  render() {
    const { products } = this.props;
    return (
      products && (
        <Downshift
          onChange={this.itemSelected.bind(this)}
          itemToString={item => (item ? item.name : "")}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
            clearSelection
          }) => (
            <div className="search-container">
              {/* <label {...getLabelProps()}>Enter a fruit</label> */}
              <input
                {...getInputProps({
                  onKeyDown: e => {
                    (e.target.value === "" || e.keyCode === 27) &&
                      clearSelection();
                  }
                })}
                placeholder="Search products"
              />
              <ul className="search-list" {...getMenuProps()}>
                {isOpen
                  ? products
                      .filter(
                        item =>
                          !inputValue ||
                          item.name.includes(inputValue) ||
                          item.name
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                      )
                      .map(
                        (item, index) =>
                          !(index > 5) && (
                            <li
                              {...getItemProps({
                                key: item.id,
                                index,
                                item,
                                style: {
                                  backgroundColor:
                                    highlightedIndex === index
                                      ? "rgba(0,0,0,0.1)"
                                      : "white",
                                  fontWeight:
                                    selectedItem === item ? "bold" : "normal"
                                }
                              })}
                            >
                              <div className="search-list__image">
                                <img src={item.imageUrl} alt="Product" />
                              </div>
                              <div className="search-list__info">
                                <h1>{item.name}</h1>
                                <p>{item.price}</p>
                              </div>
                            </li>
                          )
                      )
                  : null}
              </ul>
            </div>
          )}
        </Downshift>
      )
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsState.productsArr
});
export default connect(
  mapStateToProps,
  actions
)(withRouter(Search));
