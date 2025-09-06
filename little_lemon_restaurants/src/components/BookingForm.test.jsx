import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const dispatch = jest.fn(); // Mock dispatch function

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  
  // Find the label for the date input field
  const dateLabel = screen.getByText("Choose date");
  expect(dateLabel).toBeInTheDocument();
});