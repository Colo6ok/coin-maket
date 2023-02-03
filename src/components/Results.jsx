import React from "react";
import { ReactDOM } from "react";
import results from "./results.css";

const Result = () => {
  return (
    <>
      <section className="results">
        <div className="container">
          <div className="results__wrapper">
            <h2 className="results__title">Our Results</h2>
            <div className="results__inner">
              <div className="results__box">
                <h3 className="results__sub__title">10x</h3>
                <p className="results__desc">
                  Faster cloud account setup and provisioning
                </p>
              </div>
              <div className="results__box">
                <h3 className="results__sub__title">30%</h3>
                <p className="results__desc">
                  Savings, on average, in cloud bills
                </p>
              </div>
              <div className="results__box">
                <h3 className="results__sub__title">4,000+</h3>
                <p className="results__desc">
                  FOne-click resources to automate compliance and security
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Result;
