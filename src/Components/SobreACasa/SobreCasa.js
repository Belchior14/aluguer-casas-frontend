import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SobreCasa.css';

// Componente reutilizável para o Carrossel/Slider de Imagens
function ImageSlider({ images, altTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Se não houver imagens, não renderiza nada
  if (!images || images.length === 0) return null;

  // Se houver apenas 1 imagem, renderiza a imagem simples sem botões/dots
  if (images.length === 1) {
    return (
      <div className="v-strict-image-wrapper">
        <img src={images[0]} alt={altTitle} loading="lazy" />
      </div>
    );
  }

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  // Suporte a gestos de arrastar no ecrã tátil (Swipe Mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swipe para a esquerda -> Próxima foto
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (distance < -50) {
      // Swipe para a direita -> Foto anterior
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div 
      className="v-strict-image-wrapper slider-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Imagem Atual */}
      <img 
        src={images[currentIndex]} 
        alt={`${altTitle} - Foto ${currentIndex + 1}`} 
        loading="lazy"
      />

      {/* Contador numérico discreto no topo */}
      <div className="slider-counter">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Seta Esquerda */}
      <button 
        className="slider-btn prev-btn" 
        onClick={prevSlide} 
        aria-label="Foto anterior"
      >
        &#10094;
      </button>

      {/* Seta Direita */}
      <button 
        className="slider-btn next-btn" 
        onClick={nextSlide} 
        aria-label="Próxima foto"
      >
        &#10095;
      </button>

      {/* Pontos Indicadores (Dots) na parte inferior */}
      <div className="slider-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={(e) => goToSlide(idx, e)}
            aria-label={`Ir para a foto ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SobreCasaVerticalStrict() {
  const elementsRef = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  // Arrays de fotos para cada secção da casa
  const terraceImages = [
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465868/Casa%20Tia%20Berta/terraco_02_hzrbdn.jpg",
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465862/Casa%20Tia%20Berta/varanda_08_vqyjv7.jpg",
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465862/Casa%20Tia%20Berta/varanda_05_fqgn3r.jpg"
  ];

  const spaceImages = [
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465863/Casa%20Tia%20Berta/quartoCasal_01_rqbkrn.jpg",
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465864/Casa%20Tia%20Berta/quartoCrian%C3%A7a_04_fjzpfc.jpg",
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465864/Casa%20Tia%20Berta/sala_02_tl0g8p.jpg",
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465867/Casa%20Tia%20Berta/sala_03_mdj3cc.jpg"
  ];

  const kitchenImages = [
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465862/Casa%20Tia%20Berta/cozinha_01_vwg7vt.jpg",
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465863/Casa%20Tia%20Berta/cozinha_02_xqzlr7.jpg",
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465862/Casa%20Tia%20Berta/janela_02_wviuid.jpg",
    "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465869/Casa%20Tia%20Berta/casaDeBanho_01_slmccx.jpg"
  ];

  const locationImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="v-strict-section" id="galeria">
      
      {/* CABEÇALHO */}
      <div className="v-strict-header" ref={addToRefs}>
        <span className="v-strict-tag">{t('about.locationTag')}</span>
        <h2 className="v-strict-title">{t('about.title')}</h2>
        <p className="v-strict-intro">{t('about.intro')}</p>
      </div>

      {/* SECÇÕES VERTICAIS */}
      <div className="v-strict-feed">
        
        {/* SECÇÃO 1: TERRAÇO */}
        <div className="v-strict-card" ref={addToRefs}>
          <ImageSlider images={terraceImages} altTitle={t('about.terrace.title')} />
          <div className="v-strict-content">
            <h3 className="v-strict-card-title">{t('about.terrace.title')}</h3>
            <p className="v-strict-card-text">{t('about.terrace.text')}</p>
            <ul className="v-strict-list">
              <li><strong>{t('about.terrace.viewLabel')}</strong> {t('about.terrace.viewVal')}</li>
              <li><strong>{t('about.terrace.terrace2Label')}</strong> {t('about.terrace.terrace2Val')}</li>
              <li><strong>{t('about.terrace.accessLabel')}</strong> {t('about.terrace.accessVal')}</li>
            </ul>
          </div>
        </div>

        {/* SECÇÃO 2: ACOMODAÇÕES */}
        <div className="v-strict-card" ref={addToRefs}>
          <ImageSlider images={spaceImages} altTitle={t('about.space.title')} />
          <div className="v-strict-content">
            <h3 className="v-strict-card-title">{t('about.space.title')}</h3>
            <p className="v-strict-card-text">{t('about.space.text')}</p>
            <ul className="v-strict-list">
              <li><strong>{t('about.space.room1Label')}</strong> {t('about.space.room1Val')}</li>
              <li><strong>{t('about.space.room2Label')}</strong> {t('about.space.room2Val')}</li>
              <li><strong>{t('about.space.livingLabel')}</strong> {t('about.space.livingVal')}</li>
            </ul>
          </div>
        </div>

        {/* SECÇÃO 3: COZINHA */}
        <div className="v-strict-card" ref={addToRefs}>
          <ImageSlider images={kitchenImages} altTitle={t('about.kitchen.title')} />
          <div className="v-strict-content">
            <h3 className="v-strict-card-title">{t('about.kitchen.title')}</h3>
            <p className="v-strict-card-text">{t('about.kitchen.text')}</p>
            <ul className="v-strict-list">
              <li><strong>{t('about.kitchen.equipLabel')}</strong> {t('about.kitchen.equipVal')}</li>
              <li><strong>{t('about.kitchen.machinesLabel')}</strong> {t('about.kitchen.machinesVal')}</li>
              <li><strong>{t('about.kitchen.breakfastLabel')}</strong> {t('about.kitchen.breakfastVal')}</li>
              <li><strong>{t('about.kitchen.extraLabel')}</strong> {t('about.kitchen.extraVal')}</li>
            </ul>
          </div>
        </div>

        {/* SECÇÃO 4: LOCALIZAÇÃO */}
        <div className="v-strict-card" ref={addToRefs}>
          <ImageSlider images={locationImages} altTitle={t('about.location.title')} />
          <div className="v-strict-content">
            <h3 className="v-strict-card-title">{t('about.location.title')}</h3>
            <p className="v-strict-card-text">{t('about.location.text')}</p>
            
            <div className="v-strict-beaches">
              <div className="v-strict-beach-item">
                <span className="v-strict-beach-name">{t('about.location.beach1')}</span>
                <span className="v-strict-beach-dist">{t('about.location.beach1Dist')}</span>
              </div>
              <div className="v-strict-beach-item">
                <span className="v-strict-beach-name">{t('about.location.beach2')}</span>
                <span className="v-strict-beach-dist">{t('about.location.beach2Dist')}</span>
              </div>
              <div className="v-strict-beach-item">
                <span className="v-strict-beach-name">{t('about.location.center')}</span>
                <span className="v-strict-beach-dist">{t('about.location.centerDist')}</span>
              </div>
              <div className="v-strict-beach-item">
                <span className="v-strict-beach-name">{t('about.location.parking')}</span>
                <span className="v-strict-beach-dist">{t('about.location.parkingDist')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}