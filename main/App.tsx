import React from "react";

import Header from "./header/Header";
import MainContent from "./main-content/MainContent";
import CardsContainer from "./card/CardsContainer";
import Footer from "./footer/Footer";

import "./App.css";
  
// Card.js
//   function Card({ title, description }) {
//     return (
//       <div className="card">
//         {/* Image, title and description go here */}
//       </div>
//     );
//   }

// MainContent.js
//   function MainContent() {
//     return (
//       <main>
//         <h1>Univer Examples</h1>
//         {/* Render Card components here */}
//       </main>
//     );
//   }
  
  // Footer.js
//   function Footer() {
//     return (
//       <footer>
//         {/* Footer links and information here */}
//       </footer>
//     );
//   }
  
  // App.js
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
  