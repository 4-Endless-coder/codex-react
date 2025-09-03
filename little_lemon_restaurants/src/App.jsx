import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Highlights />
                <Testimonial />
                <About />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
