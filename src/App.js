import React from "react";
import { ReactDOM } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Products from "./components/Products";
import Results from "./components/Results";
import Services from "./components/Services";
import Contacts from "./components/contacts";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Products></Products>
      <Results></Results>
      <Services></Services>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}

export default App;
