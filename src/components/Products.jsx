import React from "react";
import { ReactDOM } from "react";
import products from "./products.css";
import SettingsPic from "../assets/settings.png"

const Products = () => {
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="products__wrapper">
            <div className="products__box">
              <h2 className="products__title">The Product</h2>
              <p className="products__desc">
                Kion offers the only single platform approach to{" "}
                <span className="span">cloud enablement</span>, transcending
                cloud management and cloud governance by offering all three
                pillars necessary for total cloud control.
              </p>
              <a href="#" className="products__link">
                More About the Product
              </a>
            </div>
            <div className="products__sb-box sb-box">
              <img className="sb-box__pic" src={SettingsPic} alt="its just a decoration like settings" />
              <h3 className="sb-box__title">Automation & Orchestration</h3>
              <p className="sb-box__desc">
                Provision accounts, get enterprise-wide visibility, and fully
                integrate the cloud with your tech stack to automate the full
                cloud lifecycle.
              </p>
              <a href="#" className="sb-box__link">Lear More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
