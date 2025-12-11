import React from 'react';

function Footer({ contact }) {
  return (
    <footer id="contact" className="footer-section">
      <div className="contact-info">
        <h4>Fale Connosco</h4>
        <p>📧 Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>📞 Telefone: <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></p>
        <a 
          href={contact.bookingLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-footer-booking"
        >
          Ver Preços e Disponibilidade
        </a>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Alojamento Local {contact.email}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;