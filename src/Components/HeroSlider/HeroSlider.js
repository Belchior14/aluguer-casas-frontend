import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 6000); // Troca a cada 6 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container" id='home'>
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

      {/* Texto Principal ao Centro Traduzido */}
      <div className="hero-content">
        <h1 className="hero-title">
          {t('hero.titleLine1')}<br /> {t('hero.titleLine2')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
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