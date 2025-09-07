import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  // Test for static text (already existed)
  test("Renders the BookingForm heading", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  // Test for HTML5 validation attributes
  test("HTML5 validation attributes are applied correctly", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("required");

    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute("required");

    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");

    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute("required");
  });

  // Test JavaScript validation for the submit button
  describe("Form submission button", () => {
    test("is disabled when form is invalid", () => {
      render(
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      );
      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      expect(submitButton).toBeDisabled();
    });

    test("is enabled when form is valid", () => {
        render(
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          );

      const dateInput = screen.getByLabelText("Choose date");
      fireEvent.change(dateInput, { target: { value: '2025-10-10' } });

      const timeSelect = screen.getByLabelText("Choose time");
      fireEvent.change(timeSelect, { target: { value: '17:00' } });

      const guestsInput = screen.getByLabelText("Number of guests");
      fireEvent.change(guestsInput, { target: { value: '2' } });

      const occasionSelect = screen.getByLabelText("Occasion");
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

      const submitButton = screen.getByRole('button', { name: /make your reservation/i });
      expect(submitButton).toBeEnabled();
    });
  });

   // Test for form submission logic
   test("calls submitForm with correct data when form is submitted", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: '2025-10-10' } });

    const timeSelect = screen.getByLabelText("Choose time");
    fireEvent.change(timeSelect, { target: { value: '17:00' } });

    const guestsInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestsInput, { target: { value: '2' } });

    const occasionSelect = screen.getByLabelText("Occasion");
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    expect(submitForm).toHaveBeenCalledWith({
      date: '2025-10-10',
      time: '17:00',
      guests: 2,
      occasion: 'Birthday'
    });
  });

});