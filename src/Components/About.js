import React from 'react';

function About({ description, amenities }) {
  return (
    <section id="about" className="about-section">
      <div className="about-description">
        <h3>A Sua Próxima Escapadela</h3>
        <p>{description}</p>
      </div>
      
      <div className="amenities-list">
        <h4>Comodidades Incluídas</h4>
        <ul>
          {amenities.map((amenity, index) => (
            <li key={index}>✅ {amenity}</li> // Utilize ícones reais (como de uma biblioteca de ícones) aqui
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;