import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
    return (
        <div className="booking-confirmation">
            <h1>Booking Confirmed!</h1>
            <p>Thank you for your reservation. We look forward to seeing you!</p>
            <Link to="/" className="btn-primary">
                Back to Home
            </Link>
        </div>
    );
};

export default ConfirmedBooking;