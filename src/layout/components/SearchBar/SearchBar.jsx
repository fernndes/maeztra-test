import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        id="search-input"
        className="search-bar__input"
        placeholder="O Que Você Busca?"
      />
      <input
        type="submit"
        name="search-submit-btn"
        id="search-submit-btn"
        className="ctaBtn search-bar__button"
        value="Buscar"
      />
    </div>
  );
}
