import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <p className="newsletter__title">Receber Nossa Newsletter</p>
      <div className="newsletter__container__input">
        <input
          type="text"
          name="newsletter"
          id="newsletter-input"
          className="newsletter__input"
          placeholder="Digite seu email"
        />
        <input
          type="submit"
          name="newsletter-submit-btn"
          id="newsletter-submit-btn"
          className="ctaBtn newsletter__button"
          value="Enviar"
        />
      </div>
    </div>
  );
}
