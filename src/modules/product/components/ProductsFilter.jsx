import React, { Component } from "react";

class ProductsFilter extends Component {
  state = {
    original: null
  };
  filter(event) {
    const { original } = this.state;
    const { filter } = this.props;
    let filtered = original;
    filtered.sort((obj1, obj2) => {
      switch (event.target.value) {
        case "ASC":
          return obj1.price - obj2.price;
        case "DESC":
          return obj2.price - obj1.price;
        case "DEF":
          return null;
        default:
          break;
      }
    });

    if (event.target.value === "DEF") {
      filter({ filtered: original });
    } else {
      filter({ filtered: filtered });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ original: this.props.products });
    }
  }
  render() {
    return (
      <div className="filter-container">
        <div className="filter-container__wrap">
          <select
            className="filter-container__wrap__select"
            onChange={this.filter.bind(this)}
          >
            <option value="DEF" label="Default" />
            <option value="ASC" label="Price ascending" />
            <option value="DESC" label="Price descending" />
          </select>
        </div>
      </div>
    );
  }
}

export default ProductsFilter;
