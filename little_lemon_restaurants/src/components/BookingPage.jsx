import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <div className="booking-form-container">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;