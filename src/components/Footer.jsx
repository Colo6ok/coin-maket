import React from "react";
import { ReactDOM } from "react";
import footer from "./footer.css";
import FooterLogo from "../assets/footer-logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__inner">
              <div className="footer__box">
                <strong className="footer__text">Our Product</strong>
                <p className="footer__desc">Product Overview</p>
                <p className="footer__desc">Automation & Orchestration</p>
                <p className="footer__desc">Financial Management</p>
                <p className="footer__desc">Continuous Compliance</p>
              </div>
              <div className="footer__box">
                <p className="sb-footer__desc">Integrations</p>
                <p className="sb-footer__desc">Request a Demo</p>
                <p className="sb-footer__desc">Try Kion For Free</p>
              </div>
              <a href="#" className="footer__link">
                Schedule Demo
              </a>
            </div>
            <div className="footer__inner">
              <div className="footer__benefits">
                <div className="sub__box">
                  <strong className="footer__text">Resources</strong>
                  <p className="sb-footer__desc">All Resources</p>
                  <p className="sb-footer__desc">Blog</p>
                  <p className="sb-footer__desc">Case Studies</p>
                </div>
                <div className="sub__box">
                  <strong className="footer__text">FAQs</strong>
                  <p className="sb-footer__desc">Support Overview</p>
                  <p className="sb-footer__desc">FAQs</p>
                </div>
                <div className="sub__box">
                  <strong className="footer__text">About</strong>
                  <p className="sb-footer__desc">About Us</p>
                  <p className="sb-footer__desc">Careers</p>
                  <p className="sb-footer__desc">Contact</p>
                </div>
              </div>
              <strong className="benefits__text">Sign up for our monthly newsletter</strong>
              <form action="https://echo.htmlacademy.ru/" method="post" className="footer__form">
                <input
                  className="footer__input"
                  type="email"
                  placeholder="Email*"
                  name="user_email"
                  aria-label="user email"
                />
                <button className="footer__btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
