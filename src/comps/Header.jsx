import React from "react";
import logo from "../images/logo.png";
import "../css/title.css";

const Header = () => {
  return (
    <nav className="layout__section layout__section_navigation">
      <div className="app__container">
        <div className="navigation">
          <div className="navigation__content">
            <a href="/" className="navigation__insta-logo" data-role="logo" data-name="header-back-button">
              <img src={logo} alt="" className="navigation__logo" />
              <div className="navigation__info"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
