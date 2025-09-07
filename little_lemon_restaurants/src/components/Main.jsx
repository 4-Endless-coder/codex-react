// src/components/Main.jsx
import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";
import About from "./About";
import BookingPage from "./BookingPage";

// Use fetchData from the API script loaded in index.html
const fetchData = window.fetchData || function(date) {
  // fallback for testing
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchData(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "date") {
    return fetchData(new Date(action.date));
  }
  return state;
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