import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <img src="src\assets\icons_assets\Logo.svg" alt="Little Lemon Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/bookings">All Bookings</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;