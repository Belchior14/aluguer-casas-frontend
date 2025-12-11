import React, { useEffect, useCallback } from 'react';

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  // useCallback garante que a função handler não é recriada desnecessariamente
  const handleKeyDown = useCallback((event) => {
    // Verifica se o lightbox está realmente aberto
    if (currentIndex === null) {
      return;
    }

    if (event.key === 'Escape') {
      onClose();
    } else if (event.key === 'ArrowRight') {
      onNext();
    } else if (event.key === 'ArrowLeft') {
      onPrev();
    }
  }, [currentIndex, onClose, onNext, onPrev]);

  // useEffect para adicionar e remover o event listener do teclado
  useEffect(() => {
    // Só adicionamos o listener se o lightbox estiver aberto
    if (currentIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Função de limpeza (cleanup)
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleKeyDown]); // Dependências: re-executa quando o currentIndex ou a função handleKeyDown muda

  if (currentIndex === null) {
    return null; 
  }

  const currentImage = images[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Botão de Fechar */}
        <button className="lightbox-close-btn" onClick={onClose}>
          &times;
        </button>
        
        {/* Botão Anterior */}
        <button 
          className="lightbox-nav-btn prev" 
          onClick={onPrev}
          disabled={isFirst} // Desativa se for a primeira imagem
          title="Anterior (Seta Esquerda)"
        >
          &#10094;
        </button>
        
        {/* Imagem Principal */}
        <img 
          src={currentImage.src} 
          alt={currentImage.alt} 
          className="lightbox-image" 
        />
        
        {/* Botão Seguinte */}
        <button 
          className="lightbox-nav-btn next" 
          onClick={onNext}
          disabled={isLast} // Desativa se for a última imagem
          title="Seguinte (Seta Direita)"
        >
          &#10095;
        </button>
        
        <p className="lightbox-caption">{currentImage.alt}</p>
      </div>
    </div>
  );
}

export default Lightbox;