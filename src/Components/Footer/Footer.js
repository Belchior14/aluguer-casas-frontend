import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id='contactos'>
      <div className="footer-content">
        
        {/* Identificação do Alojamento */}
        <div className="footer-brand">
          <h3>Casa da Praia</h3>
          <p>Ericeira, Portugal</p>
        </div>

        {/* Lista de Contactos Diretos */}
        <div className="footer-contacts">
          
          {/* E-mail */}
          <a 
            href="mailto:belchior.fontao@gmail.com" 
            className="contact-card"
            title="Enviar e-mail"
          >
            <span className="contact-icon">✉️</span>
            <span>belchior.fontao@gmail.com</span>
          </a>

          {/* Chamada Telefónica */}
          <a 
            href="tel:+351913233975" 
            className="contact-card"
            title="Ligar"
          >
            <span className="contact-icon">📞</span>
            <span>+351 913 233 975</span>
          </a>

          {/* Mensagem WhatsApp Direta */}
          <a 
            href="https://wa.me/351913233975?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20a%20Casa%20da%20Praia." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-card whatsapp-card"
            title="Conversar no WhatsApp"
          >
            <span className="contact-icon">💬</span>
            <span>Falar pelo WhatsApp</span>
          </a>

        </div>

        <div className="footer-divider" />

        {/* Rodapé Legal */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Casa da Praia. Todos os direitos reservados.</p>
          <p>Alojamento Local — Ericeira</p>
        </div>

      </div>
    </footer>
  );
}