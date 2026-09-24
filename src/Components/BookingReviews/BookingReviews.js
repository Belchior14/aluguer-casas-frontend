import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './BookingReviews.css';

const REVIEWS_DATA = {
  score: "9.7",
  totalReviews: 7,
  bookingUrl: "https://www.booking.com/hotel/pt/casa-da-praia-vista-mar.pt-pt.html?aid=1610685&label=ericeira-X9qmgBnN1gW5zZmt%2AzkT%2AgS379670866958%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-329262632386%3Alp9240745%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcTrZg6rgS-QrwXL1eMo4Rw&sid=23292eba121386f61338d8f3408fb8a4&all_sr_blocks=1543828101_426800685_4_0_0&checkin=2027-01-26&checkout=2027-01-30&dest_id=-2164547&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1543828101_426800685_4_0_0&hpos=1&matching_block_id=1543828101_426800685_4_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1543828101_426800685_4_0_0__48960&srepoch=1790187490&srpvid=635e80a011a70960&type=total&ucfs=1&",
  reviews: [
    {
      id: 1,
      name: "João Silva",
      country: "Portugal",
      flag: "🇵🇹",
      score: "10",
      date: { pt: "Agosto de 2026", en: "August 2026", fr: "Août 2026" },
      comment: {
        pt: "A Casa da Praia superou todas as nossas expectativas! A vista para o mar é incrível e o espaço estava impecavelmente limpo.",
        en: "Casa da Praia exceeded all our expectations! The ocean view is incredible and the place was spotlessly clean.",
        fr: "Casa da Praia a dépassé toutes nos attentes ! La vue sur la mer est incroyable et l'endroit était d'une propreté impeccable."
      }
    },
    {
      id: 2,
      name: "Sophie Dubois",
      country: "França",
      flag: "🇫🇷",
      score: "9.5",
      date: { pt: "Julho de 2026", en: "July 2026", fr: "Juillet 2026" },
      comment: {
        pt: "Localização perfeita, a poucos passos da praia. Casa muito bem equipada e anfitriões muito prestáveis.",
        en: "Perfect location, just steps from the beach. Very well-equipped house and super helpful hosts.",
        fr: "Emplacement parfait, à quelques pas de la plage. Maison très bien équipée et hôtes très serviables."
      }
    },
    {
      id: 3,
      name: "Mark Schmidt",
      country: "Alemanha",
      flag: "🇩🇪",
      score: "10",
      date: { pt: "Junho de 2026", en: "June 2026", fr: "Juin 2026" },
      comment: {
        pt: "Tivemos uma estadia fantástica em família. Espaço muito confortável e tranquilo. Voltaremos de certeza!",
        en: "We had a fantastic family stay. Very comfortable and peaceful space. We will definitely be back!",
        fr: "Nous avons passé un fantastique séjour en famille. Espace très confortable et calme. Nous reviendrons sans hésiter !"
      }
    },
    {
      id: 4,
      name: "Elena Rostova",
      country: "Espanha",
      flag: "🇪🇸",
      score: "9.8",
      date: { pt: "Maio de 2026", en: "May 2026", fr: "Mai 2026" },
      comment: {
        pt: "Adorámos a varanda e o pôr do sol. Excelente para descansar durante uns dias.",
        en: "We loved the balcony and the sunset. Excellent place to relax for a few days.",
        fr: "Nous avons adoré le balcon et le coucher de soleil. Excellent pour se reposer quelques jours."
      }
    },
    {
      id: 5,
      name: "David Miller",
      country: "Reino Unido",
      flag: "🇬🇧",
      score: "10",
      date: { pt: "Abril de 2026", en: "April 2026", fr: "Avril 2026" },
      comment: {
        pt: "Excelente localização e apartamento super limpo. O anfitrião deu-nos dicas locais incríveis para surf!",
        en: "Great location and super clean apartment. The host gave us amazing local tips for surfing!",
        fr: "Super emplacement et appartement très propre. L'hôte nous a donné d'excellents consells locaux pour le surf !"
      }
    }
  ]
};

export default function BookingReviews() {
  const scrollContainerRef = useRef(null);
  const { t, i18n } = useTranslation();
  
  // Obtém o idioma selecionado (pt, en ou fr)
  const currentLang = i18n.language || 'pt';

  // Navegação manual por botões
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Carrossel automático (muda a cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="booking-reviews-section">
      <div className="reviews-container">
        
        {/* Banner do Booking.com */}
        <div className="booking-header">
          <div className="booking-brand-wrapper">
            <span className="booking-logo">Booking.com</span>
            <span className="booking-subtitle">{t('reviews.subtitle')}</span>
          </div>

          <div className="booking-score-badge">
            <div className="score-info">
              <span className="score-status">{t('reviews.status')}</span>
              <span className="reviews-count">{t('reviews.count')}</span>
            </div>
            <div className="score-box">{REVIEWS_DATA.score}</div>
          </div>
        </div>

        {/* Carrossel de Comentários */}
        <div className="carousel-wrapper">
          <button className="scroll-btn left" onClick={() => handleScroll('left')} aria-label="Anterior">
            ‹
          </button>

          <div className="reviews-scroll-container" ref={scrollContainerRef}>
            {REVIEWS_DATA.reviews.map((item) => (
              <div key={item.id} className="review-card">
                
                <div className="card-header">
                  <div className="user-info">
                    <span className="user-name">{item.name}</span>
                    <span className="user-country">
                      <span className="country-flag">{item.flag}</span> {item.country}
                    </span>
                  </div>
                  <div className="card-score">{item.score}</div>
                </div>

                <p className="card-text">
                  "{item.comment[currentLang] || item.comment.pt}"
                </p>

                <div className="card-footer">
                  <span className="stay-date">
                    {t('reviews.stayDate')} {item.date[currentLang] || item.date.pt}
                  </span>
                </div>

              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => handleScroll('right')} aria-label="Seguinte">
            ›
          </button>
        </div>

        {/* Botão CTA para o Booking */}
        <div className="booking-cta-wrapper">
          <a 
            href={REVIEWS_DATA.bookingUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="booking-cta-btn"
          >
            {t('reviews.cta')}
          </a>
        </div>

      </div>
    </section>
  );
}