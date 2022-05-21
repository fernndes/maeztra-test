import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import shelf from "../../mocks/products";
import "./Shelf.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function ProductSummary() {
  return (
    <div className="container shelf-container">
      <p className="section__title shelf__section-title">{shelf.title}</p>
      <div className="shelf">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
          navigation
        >
          {shelf.content.map((product, index) => {
            return (
              <SwiperSlide>
                <div className="shelf__product-summary">
                  <div
                    className="shelf__product-image"
                    style={{ backgroundImage: `url(${product.productImage})` }}
                  />
                  <div className="shelf__product-sku-selector">
                    {product.productSkus.map((sku, skuIndex) => {
                      return (
                        <div
                          key={`${sku.productName}-${skuIndex}`}
                          className="shelf__product-sku-selector__sku"
                          style={{ background: sku.productImage }}
                        />
                      );
                    })}
                  </div>
                  <div className="shelf__product-product-price">
                    R$ {product.productPrice.toFixed(2).replace(".", ",")}
                  </div>
                  <div className="shelf__product-product-name">
                    {product.productName}
                  </div>
                  <div className="shelf__product-product-description">
                    <p>{product.productDescription}</p>
                  </div>
                  <div>
                    <input
                      type="submit"
                      name="shelf-submit-btn"
                      id="shelf-submit-btn"
                      className="ctaBtn shelf__content__ctabutton"
                      value="Adicionar"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
