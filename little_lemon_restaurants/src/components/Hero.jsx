import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservations');
  };

  return (
    <section id='hero'>
      <div>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
           Our atmosphere is casual and inviting, perfect for a romantic dinner or a night out with friends.</p>
        {/* Add the onClick handler to the button */}
        <button onClick={handleReserveClick}>Reserve a Table</button>
      </div>
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=400&fit=crop" alt="Little Lemon Restaurant Interior" />
    </section>
  );
};

export default Hero;