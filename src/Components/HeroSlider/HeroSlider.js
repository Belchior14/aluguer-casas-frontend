import React, { useState, useEffect } from 'react';
import './HeroSlider.css'; // Importa o CSS puro

const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    alt: 'Vista para o mar e praia'
  },
  {
    url: 'https://res.cloudinary.com/dswjf3cpk/image/upload/v1790008957/vista_varanda_xzi6sn.jpg',
    alt: 'Varanda do alojamento com vista mar'
  },
  {
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920&q=80',
    alt: 'Interior do alojamento'
  },
  {
    url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1920&q=80',
    alt: 'Quarto com iluminação natural'
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 6000); // Troca a cada 6 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      {/* 4 Imagens em Loop */}
      {IMAGES.map((img, index) => (
        <div
          key={img.url}
          className={`hero-image-wrapper ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={img.url} alt={img.alt} className="hero-image" />
        </div>
      ))}

      {/* Camada para escurecer a imagem de fundo */}
      <div className="hero-overlay" />

      {/* Texto Principal ao Centro */}
      <div className="hero-content">
        <h1 className="hero-title">
          A sua casa longe de casa,<br /> com vista para o mar.
        </h1>
        <p className="hero-subtitle">
          Acorde com o som das ondas e desfrute de momentos inesquecíveis.
        </p>
        {/*
        <div className="hero-buttons">
          <a href="#reservar" className="btn-primary">Ver Disponibilidade</a>
          <a href="#galeria" className="btn-secondary">Explorar Fotos</a>
        </div>
        */}
      </div>

      {/* Pontos Indicadores no Canto Inferior */}
      <div className="hero-indicators">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`}
            aria-label={`Imagem ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}