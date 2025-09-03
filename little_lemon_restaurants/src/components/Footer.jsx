import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <img src="src\assets\icons_assets\Logo.svg" alt="Little Lemon Logo" />
        </section>
        <section>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Contact</h3>
          <p>Address</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </section>
        <section>
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};

export default Footer;
