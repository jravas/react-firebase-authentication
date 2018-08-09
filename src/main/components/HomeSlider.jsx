import React, { Component } from "react";
import ProductPublic from "../../modules/product/components/ProductPublic";
import Swiper from "react-id-swiper/lib/custom";

export class HomeSlider extends Component {
  render() {
    const { products } = this.props;
    let discounted = products.filter(item => item.discountActive);
    // swiper options
    const params = {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      rebuildOnUpdate: true,
      keyboard: {
        enabled: true
      },
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false
      // },
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom"
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is <= 768
        768: {
          slidesPerView: 1,
          centeredSlides: false
        }
      }
    };
    return (
      <div className="product-swiper-wrap">
        <Swiper {...params}>
          {discounted.map(item => (
            <div className="home-product-wrap" key={item.id}>
              <ProductPublic product={item} />
            </div>
          ))}
        </Swiper>
      </div>
    );
  }
}
