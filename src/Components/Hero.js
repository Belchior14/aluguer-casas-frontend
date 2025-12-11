import React from 'react';

function Hero({ tagline, bookingLink }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>{tagline}</h2>
        {/*  */}
        <p>Clique abaixo para verificar a disponibilidade e reservar a sua estadia.</p>
        <a 
          href={bookingLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-booking"
        >
          Reservar Agora
        </a>
      </div>
    </section>
  );
}

export default Hero;