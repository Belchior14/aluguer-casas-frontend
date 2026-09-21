import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o utilizador já tomou uma decisão anteriormente
    const consent = localStorage.getItem('casa_praia_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('casa_praia_cookie_consent', 'accepted');
    setIsVisible(false);
    // Aqui podes carregar scripts como o Google Analytics, se usares
  };

  const handleDecline = () => {
    localStorage.setItem('casa_praia_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        Utilizamos cookies para melhorar a sua experiência de navegação e analisar o tráfego do site. Ao clicar em "Aceitar", concorda com a nossa utilização de cookies.
      </p>
      <div className="cookie-buttons">
        <button onClick={handleDecline} className="btn-cookie-decline">
          Recusar
        </button>
        <button onClick={handleAccept} className="btn-cookie-accept">
          Aceitar Cookies
        </button>
      </div>
    </div>
  );
}