import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "@/modules/product/redux/actions";
import ProductPublic from "../../modules/product/components/ProductPublic";
import { ProductsListPublic } from "@/modules/product";
import Swiper from "react-id-swiper";

class HomePage extends Component {
  componentDidMount() {
    const { fetchProductsArr } = this.props;
    fetchProductsArr();
  }
  render() {
    const { products } = this.props;
    console.log(products);
    let pr = products.filter(item => item.discountActive);
    const params = {
      loop: true,
      slidesPerView: 3,
      // spaceBetween: 40,
      centeredSlides: true,
      rebuildOnUpdate: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };
    return !products ? null : (
      <div>
        {/* <ProductsListPublic products={pr} /> */}
        <Swiper {...params}>
          {pr.map(item => (
            <div className="home-product-wrap">
              <ProductPublic product={item} key={item.id} />
            </div>
          ))}
        </Swiper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsState.productsArr
});

export default connect(
  mapStateToProps,
  actions
)(HomePage);
