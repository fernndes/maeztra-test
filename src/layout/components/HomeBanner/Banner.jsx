import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "./Banner.css";
import banner from "../../mocks/main-banner";

export default function Banner() {
  return (
    <div className="home-banner">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        className="home-banner__container"
      >
        {banner.map((content, index) => {
          return (
            <SwiperSlide key={`${content.title}-${index}`}>
              <div className="home-banner__content">
                <img src={content.imageUrl} alt="banner" />
                <div className="home-banner__content__block">
                  <p className="home-banner__content__title">{content.title}</p>
                  <p className="home-banner__content__text">{content.text}</p>
                  <input
                    type="submit"
                    name="home-banner-submit-btn"
                    id="home-banner-submit-btn"
                    className="ctaBtn home-banner__content__ctabutton"
                    value="Conferir"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
