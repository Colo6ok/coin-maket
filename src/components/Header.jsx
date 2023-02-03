import React from "react";
import { ReactDOM } from "react";
import header from "./header.css";
import Logo from "../assets/logo.svg";
import Pic from "../assets/search-pic.svg";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header__inner">
            <a href="./index.html" className="header__link">
              <img
                src={Logo}
                width={131}
                height={40}
                alt="this is the site logo"
              />
            </a>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Product
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Resources
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Support
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    About
                  </a>
                </li>
              </ul>
            </nav>
            <div className="menu__box">
              <img
                src={Pic}
                alt="this is the searching logo"
                className="menu__pic"
              />
              <a href="#" className="menu__sub__link">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
