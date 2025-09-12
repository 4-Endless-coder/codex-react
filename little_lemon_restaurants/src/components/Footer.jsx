import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <section>
          <img src="src\assets\icons_assets\Logo.svg" alt="Little Lemon Logo" />
          <p>Family-owned Mediterranean restaurant serving authentic dishes with a modern twist.</p>
        </section>
        <section>
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </section>
        <section>
          <h3>Contact</h3>
          <p>678 Pisa Dr, Chicago, IL 60611</p>
          <p>Phone: (312) 555-0123</p>
          <p>Email: info@littlelemon.com</p>
        </section>
        <section>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;