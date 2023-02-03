import React from "react";
import { ReactDOM } from "react";
import intro from "./intro.css";
import IntroPic from "../assets/intro-pic.png";
import SubLogo from "../assets/also-logotipes.png";

const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="intro__inner">
            <div className="intro__box">
              <h1 className="intro__title">
                Complete cloud enablement has arrived.
              </h1>
              <p className="intro__desc">
                Oversee, secure, and scale your <br /> cloud with one solution.
              </p>
              <a href="#" className="intro__link">
                Request Demo
              </a>
            </div>
            <img
              src={IntroPic}
              alt="this is a director of company"
              className="intro__pic"
            />
          </div>
          <div className="intro-sb__box">
            <img src={SubLogo} alt="this is diferent logotipes" className="sb-pic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
