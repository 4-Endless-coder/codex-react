import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500); // Hide after 2.5s
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "date", date: newDate });
    setTime("");
  };

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          required
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          required
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="" disabled>
            -- Select time --
          </option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          required
          type="number"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
      {showPopup && (
        <div className="reservation-popup">
          <span role="img" aria-label="success" className="popup-icon">🎉</span>
          <div>
            <strong>Reservation Submitted!</strong>
            <p>Your table is booked. We look forward to seeing you!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;