// src/components/Main.jsx
import React, { useReducer, useState, useEffect } from "react"; // Import useEffect
import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";
import About from "./About";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import BookingsTable from "./BookingsTable";
import { fetchAPI, submitAPI } from '../../api';

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

  // Initialize bookings state from local storage
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const navigate = useNavigate();

  // Save bookings to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      setBookings([...bookings, formData]);
      navigate("/confirmed-booking");
    }
    return success;
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<>
            <Hero />
            <Highlights />
            <Testimonial />
            <About />
          </>}
        />
        <Route path="/reservations" element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="/bookings" element={<BookingsTable bookings={bookings} />} />
      </Routes>
    </main>
  );
};

export default Main;