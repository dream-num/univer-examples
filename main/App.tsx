import React from "react";

import Header from "./header/Header";
import MainContent from "./main-content/MainContent";
import CardsContainer from "./card/CardsContainer";
import Footer from "./footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <CardsContainer />
      <Footer />
    </div>
  );
}

export default App;
