import React from 'react';

const Highlights = () => {
  return (
    <section id='highlights'>
      <h2>This Week's Specials!</h2>
      <div className="highlights-grid">
        <article>
          <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop" alt="Greek Salad" />
          <div className="article-content">
            {/* Use Flexbox for alignment instead of float */}
            <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
              Greek Salad <span style={{ color: '#F4CE14' }}>$12.99</span>
            </h3>
            <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <a href="">Order a Delivery <span aria-hidden="true">🏍️</span></a>
          </div>
        </article>
        <article>
          <img src="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=400&h=300&fit=crop" alt="Bruschetta" />
          <div className="article-content">
            {/* Use Flexbox for alignment instead of float */}
            <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
              Bruschetta <span style={{ color: '#F4CE14' }}>$5.99</span>
            </h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="">Order a Delivery <span aria-hidden="true">🏍️</span></a>
          </div>
        </article>
        <article>
          <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop" alt="Lemon Dessert" />
          <div className="article-content">
            {/* Use Flexbox for alignment instead of float */}
            <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
              Lemon Dessert <span style={{ color: '#F4CE14' }}>$5.00</span>
            </h3>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="">Order a Delivery <span aria-hidden="true">🏍️</span></a>
          </div>
        </article>
      </div>
      <button>Online Menu</button>
    </section>
  );
};

export default Highlights;