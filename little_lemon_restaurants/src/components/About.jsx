import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <h2>Little Lemon</h2>
      <div className="about-content">
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. 
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. 
          Our chefs bring years of experience creating authentic Mediterranean flavors that transport you straight to the Greek islands.
        </p>
        <div className="about-images">
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=200&fit=crop" alt="Chef Adrian" />
          <img src="https://plus.unsplash.com/premium_photo-1734437069907-bd6649ef017b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chef Mario" />
        </div>
      </div>
    </section>
  )
}

export default About