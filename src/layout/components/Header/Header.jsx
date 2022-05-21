import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export default function Header() {
  return (
    <div className={`container header`}>
      <div className={`header-menu`}>
        <div
          className={`header-menu__logo`}
          style={{
            backgroundImage: "url(/assets/images/logo-maeztra-novo.png)",
          }}
        />
        <div className="header-menu__search">
          <SearchBar />
        </div>
        <div className="header-menu__menu">
          <ul className="header-menu__items">
            <li className="header-menu__item">
              <img src="assets/icons/profile.png" alt="profile" />
              <p>Minha Conta</p>
            </li>
            <li className="header-menu__item">
              <img src="assets/icons/heart.png" alt="heart" />
              <p>Minha Conta</p>
            </li>
            <li className="header-menu__item">
              <img src="assets/icons/bag.png" alt="bag" />
              <p>Meu Carrinho</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
