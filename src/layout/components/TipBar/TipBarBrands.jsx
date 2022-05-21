import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import tipbarbrands from "../../mocks/tipbar-brands";
import "./TipBar.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function TipBarBrands() {
  return (
    <div className="container tipbar-brands">
      <p className="section__title section__tipbar-brands">
        {tipbarbrands.title}
      </p>
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
        {tipbarbrands.content.map((brand, index) => {
          return (
            <SwiperSlide key={`${brand.title}-${index}`}>
              <div className="tipbar-brands__brand">
                <img src={brand.url} alt={brand.title} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
