import React from "react";
import "./HomeArticle.css";

export default function HomeArticle() {
  return (
    <div className="container promotional">
      <div className="promotional__content">
        <p className="promotional__content-title">Lorem ipsum </p>
        <p className="promotional__content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>
      <div className="promotional__banner">
        <img src="assets/images/banners/promotional.png" alt="promotional" />
      </div>
    </div>
  );
}
