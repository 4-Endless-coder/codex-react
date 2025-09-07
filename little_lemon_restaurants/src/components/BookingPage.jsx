import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <div className="booking-form-container">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} // Pass the function down
      />
    </div>
  );
};

export default BookingPage;