import React from "react";
import { ReactDOM } from "react";
import contacts from "./contacts.css"

const Contacts = () => {
  return (
    <>
      <section className="contacts">
        <div className="container">
          <div className="contacts__inner">
            <h2 className="contacts__title">
              Start your cloud <br /> enablement journey.
            </h2>
            <p className="contacts__desc">Request a demo today,</p>
            <a href="#" className="contacts__link">
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
