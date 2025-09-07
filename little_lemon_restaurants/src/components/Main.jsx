// src/components/Main.jsx
import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";
import About from "./About";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking"; // Import the new component
import { fetchAPI, submitAPI } from './api';

export const updateTimes = (state, action) => {
  if (action.type === 'date') {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate(); // Hook for navigation

  // Function to submit the form data
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed-booking"); // Navigate on success
    }
    return success;
  };

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
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm} // Pass the function down
            />
          }
        />
        {/* Add the route for the confirmation page */}
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;