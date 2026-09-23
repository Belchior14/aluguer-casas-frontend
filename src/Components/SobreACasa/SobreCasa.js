import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './SobreCasa.css';

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
          <div className="v-strict-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
              alt={t('about.terrace.title')} 
            />
          </div>
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
          <div className="v-strict-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80" 
              alt={t('about.space.title')} 
            />
          </div>
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
          <div className="v-strict-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
              alt={t('about.kitchen.title')} 
            />
          </div>
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
          <div className="v-strict-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
              alt={t('about.location.title')} 
            />
          </div>
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