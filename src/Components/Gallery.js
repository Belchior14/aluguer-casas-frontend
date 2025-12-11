import React, { useState, useCallback } from 'react';
import Lightbox from './Lightbox'; // Importa o novo componente

function Gallery({ images }) {
  // Estado para controlar o índice da imagem visível no slider (carousel)
  const [sliderIndex, setSliderIndex] = useState(0);
  
  // Estado para controlar o índice da imagem selecionada no lightbox (modal)
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const totalImages = images.length;

  // Lógica para avançar no slider
  const nextSlide = useCallback(() => {
    setSliderIndex((prevIndex) => 
      (prevIndex + 1) % totalImages // Volta para o início se chegar ao fim
    );
  }, [totalImages]);

  // Lógica para retroceder no slider
  const prevSlide = useCallback(() => {
    setSliderIndex((prevIndex) => 
      (prevIndex - 1 + totalImages) % totalImages // Volta para o fim se chegar ao início
    );
  }, [totalImages]);

  // Abrir o Lightbox (modal)
  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  // Fechar o Lightbox (modal)
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Navegar para a próxima imagem dentro do Lightbox
  const nextLightboxImage = useCallback(() => {
    if (lightboxIndex < totalImages - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  }, [lightboxIndex, totalImages]);

  // Navegar para a imagem anterior dentro do Lightbox
  const prevLightboxImage = useCallback(() => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  }, [lightboxIndex]);


  return (
    <section id="gallery" className="gallery-section">
      <h3>Visite o Nosso Espaço</h3>
      
      {/* -------------------- SLIDER -------------------- */}
      <div className="slider-container">
        {/* Botão de Navegação Anterior do Slider */}
        <button className="slider-nav-btn prev" onClick={prevSlide}>
          &#10094;
        </button>
        
        <div className="slider-content">
          {/* Mostra apenas a imagem atual (sliderIndex) */}
          <div className="slider-item">
             <img 
               src={images[sliderIndex].src} 
               alt={images[sliderIndex].alt} 
               className="slider-image" 
               onClick={() => openLightbox(sliderIndex)} // Abre o lightbox ao clicar
             />
             <p className="slider-caption">{images[sliderIndex].alt}</p>
          </div>
        </div>

        {/* Botão de Navegação Seguinte do Slider */}
        <button className="slider-nav-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Indicadores (pontinhos) */}
      <div className="slider-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === sliderIndex ? 'active' : ''}`}
            onClick={() => setSliderIndex(index)}
          />
        ))}
      </div>
      
      {/* -------------------- LIGHTBOX -------------------- */}
      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextLightboxImage}
        onPrev={prevLightboxImage}
      />
    </section>
  );
}

export default Gallery;