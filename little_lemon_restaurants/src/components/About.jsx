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
          <img src="src/assets/icons_assets/Mario and Adrian A.jpg" alt="Chef Mario" />
        </div>
      </div>
    </section>
  )
}

export default About