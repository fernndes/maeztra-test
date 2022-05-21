import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import tipbar from "../../mocks/tipbar";
import "./TipBar.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function TipBarContent() {
  return (
    <div className="container tipbar-content">
      <p className="tipbar__section-title">{tipbar.title}</p>
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
        {tipbar.content.map((content, index) => {
          return (
            <SwiperSlide key={`${content.title}-${index}`}>
              <div className="tipbar-contents__card">
                <img src={content.icon} alt={content.title} />
                <div className="tipbar-contents__content">
                  <div className="tipbar-contents__title">{content.title}</div>
                  <div className="tipbar-contents__text">{content.text}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
