import React from 'react';
import './styles/App.css'; // Importa o ficheiro de estilos
import HeroSlider from './Components/HeroSlider/HeroSlider';
import SobreCasa from './Components/SobreACasa/SobreCasa';
import Footer from './Components/Footer/Footer';
import CookieBanner from './Components/Cookies/CookiBanner';
import Header from './Components/Header/Header';
import BookingReviews from './Components/BookingReviews/BookingReviews';

function App() {


  return (
    <div className="app-container">
      <Header/>
      <main>


        <HeroSlider/>

      </main>

      <SobreCasa/>
      <BookingReviews/>
      <Footer/>
      <CookieBanner/>
    </div>
  );
}

export default App;