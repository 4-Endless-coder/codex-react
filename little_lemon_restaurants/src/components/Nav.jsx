import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons_assets/Logo.svg";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo" />
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