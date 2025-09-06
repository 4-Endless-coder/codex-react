// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main"; // Import the new Main component
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Main /> {/* Use the new Main component here */}
      <Footer />
    </Router>
  );
}

export default App;