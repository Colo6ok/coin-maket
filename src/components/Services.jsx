import React from "react";
import { ReactDOMj } from "react";
import services from "./services.css";
import VideoPic from "../assets/coin-video.png";
import Logos from "../assets/different-logos.png";

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="services__wrapper">
            <div className="services__inner">
              <h2 className="services__title">The Kion Difference</h2>
              <p className="services__desc">
                We deliver more than just the features to manage and govern your
                cloud. Kion gives you a comprehensive solution for your cloud to
                enable your organization to achieve more.
              </p>
              <ul className="services__list">
                <li className="services__item">
                  <p className="item__desc">our differences</p>
                  <ul className="services-sb__list sb-list">
                    <li className="sb__item">Cloud-native access</li>
                    <li className="sb__item">
                      A private, self-hosted architecture
                    </li>
                    <li className="sb__item">Multi-cloud control</li>
                    <li className="sb__item">A single, intuitive interface</li>
                  </ul>
                </li>
              </ul>
              <a href="#" className="services__link">
                Learn More
              </a>
            </div>
            <img src={VideoPic} alt="" className="coin__pic" />
          </div>
          <div className="sub__wrapper">
            <h3 className="services-sb__title">Built For</h3>
            <img src={Logos} alt="" className="sub__pic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
