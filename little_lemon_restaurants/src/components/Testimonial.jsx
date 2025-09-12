import React from 'react'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        <article>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sarah Johnson" />
          <h4>Sarah Johnson</h4>
          <p>"Amazing food and wonderful atmosphere! The Greek salad was fresh and delicious. Definitely coming back!"</p>
        </article>
        <article>
          <div className="stars">⭐⭐⭐⭐</div>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Mike Chen" />
          <h4>Mike Chen</h4>
          <p>"Best Mediterranean restaurant in Chicago! The lemon dessert is absolutely incredible. Highly recommended!"</p>
        </article>
        <article>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Emma Davis" />
          <h4>Emma Davis</h4>
          <p>"Family-owned gem with authentic flavors. The bruschetta was perfectly prepared and the service was outstanding!"</p>
        </article>
      </div>
    </section>
  )
}

export default Testimonial