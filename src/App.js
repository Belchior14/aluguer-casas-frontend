import React from 'react';
import Header from './Components/Header';
import './styles/App.css'; // Importa o ficheiro de estilos
import HeroSlider from './Components/HeroSlider/HeroSlider';
import SobreCasa from './Components/SobreACasa/SobreCasa';
import Footer from './Components/Footer/Footer';
import CookieBanner from './Components/Cookies/CookiBanner';

function App() {
  // Dados de exemplo (substitua com os seus dados reais)
  const accommodationData = {
    name: "Casa da Praia",
    tagline: "A sua casa longe de casa, com vista para o mar.",
    description: "Desfrute de uma estadia tranquila à beira-mar. A Casa da Praia combina o conforto moderno com o charme rústico. Perfeito para casais ou famílias pequenas.",
    amenities: ["Wi-Fi Gratuito", "Cozinha Equipada"],
    galleryImages: [
      { id: 1, src: 'https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465864/Casa%20Tia%20Berta/sala_01_vrjcfx.jpg', alt: 'Sala de Estar' },
      { id: 2, src: 'https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465864/Casa%20Tia%20Berta/sala_02_tl0g8p.jpg', alt: 'Sala de Estar' },
      { id: 3, src: 'https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465868/Casa%20Tia%20Berta/sala_04_phgy03.jpg', alt: 'Sala de Estar' },
      { id: 4, src: 'https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465863/Casa%20Tia%20Berta/cozinha_02_xqzlr7.jpg', alt: 'Cozinha' },
      { id: 5, src: 'https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465862/Casa%20Tia%20Berta/cozinha_01_vwg7vt.jpg', alt: 'Cozinha' },
      { id: 6, src: 'https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465863/Casa%20Tia%20Berta/quartoCasal_01_rqbkrn.jpg', alt: 'Quarto Cama de Casal' },
      { id: 7, src: "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465863/Casa%20Tia%20Berta/quartoCrian%C3%A7a_03_ouso1r.jpg" , alt: "Quarto Camas Individuais"},
      { id: 8, src: 'https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465862/Casa%20Tia%20Berta/varanda_03_oomdam.jpg', alt: 'Vista da Varanda' },
      { id: 9, src: "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465868/Casa%20Tia%20Berta/varanda_01_racnux.jpg", alt:"Varanda"},
      { id: 10, src: "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465867/Casa%20Tia%20Berta/terraco_01_kk2vcy.jpg" , alt: "Terraço"},
      { id: 11, src: "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465867/Casa%20Tia%20Berta/terraco_03_ahabdu.jpg" , alt: "Terraço"},
      { id: 12, src: "https://res.cloudinary.com/dswjf3cpk/image/upload/v1765465862/Casa%20Tia%20Berta/janela_02_wviuid.jpg" , alt: "Vista Cozinha"}
      // Adicione mais imagens aqui
    ],
    contact: {
      email: "belchior.fontao@gmail.com",
      phone: "+351 913 233 975",
      bookingLink: "LINK_PARA_PLATAFORMA_DE_RESERVAS" // Ex: Booking, Airbnb, etc.
    }
  };

  return (
    <div className="app-container">
      <Header accommodationName={accommodationData.name} />
      
      <main>


        <HeroSlider/>

      </main>

      <SobreCasa/>
      <Footer/>
      <CookieBanner/>
    </div>
  );
}

export default App;