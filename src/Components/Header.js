import React from 'react';
// Importe um ficheiro CSS para o Header se quiser estilos específicos

function Header({ accommodationName }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>{accommodationName}</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#contact">Contactos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;