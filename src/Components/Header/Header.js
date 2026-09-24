import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* Logo */}
        <a href="#home" className="brand-logo" onClick={closeMenu}>
          Casa da Praia
        </a>

        {/* Zona de Ações (Menu + Idiomas) */}
        <div className="header-actions">
          
          {/* Navegação Principal (Vem primeiro no desktop) */}
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#galeria" className="nav-link" onClick={closeMenu}>
                  {t('nav.photos')}
                </a>
              </li>
              <li className="nav-item">
                <a href="#contactos" className="nav-link" onClick={closeMenu}>
                  {t('nav.contacts')}
                </a>
              </li>
            </ul>
          </nav>

          {/* Seletor de Idiomas (Agora fica à DIREITA dos links) */}
          <div className="lang-selector">
            <button 
              className={`lang-btn ${i18n.language === 'pt' ? 'active' : ''}`} 
              onClick={() => changeLanguage('pt')}
            >
              PT
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`} 
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`} 
              onClick={() => changeLanguage('fr')}
            >
              FR
            </button>
          </div>

          {/* Botão Hamburger (Mobile) */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

        </div>

        {/* Overlay escuro de fundo no mobile */}
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

      </div>
    </header>
  );
}