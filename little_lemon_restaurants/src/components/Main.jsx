// src/components/Main.jsx
import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";
import About from "./About";
import BookingPage from "./BookingPage";

const updateTimes = (state, action) => {
  // action = { type: 'date', date: 'YYYY-MM-DD' }
  if (!action) return state;

  switch (action.type) {
    case "date":
      // For now return fixed slots — replace with real logic if needed
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
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
        <Route
          path="/reservations"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;