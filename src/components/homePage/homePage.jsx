import React from 'react';
import './homePage.css';
import wedding from '../assets/wedding4.svg';
import NavBar from './navBar/navBar.jsx';
import ContactUs from './contactUs/contactUs.jsx';
import LandingHome from './landingHome/landingHome.jsx';
import Poema from './Poema/Poema';

const HomePage = () => {

  return (
  <div>
    <NavBar/>
    <LandingHome/>
    <Poema/>
  <div className='containerHome'>
    <div className='col1'>
      <img className='image' src={wedding} alt='boda'/>
    </div>
    <div className='col2'>
      <h1 className='Playfair'>Laura Zafra y Sebastián Pineda</h1>
      <h3 className='Playfair'> junto con sus Familias</h3>
      <h3 className='Playfair'>tienen el gusto de invitarte a su boda el </h3>
      <h1 className='Monsieur'>Sábado, 4 de junio de 2022</h1>
      <h1 className='Monsieur'>4 pm. Misa nupcial en la Parroquia Santa Bibiana </h1>
      <h3 className='Playfair'>Usaquén</h3>
      <h1 className='Monsieur'>6 pm. Recepción en el Hotel Estelar La Fontana </h1>
      <h1 className='Monsieur'>Salón Cigarra</h1>
      <h3 className='Playfair'>Código de vestimenta</h3>
      <p className='Playfair'>Hombres – Traje formal y corbata</p>
      <p className='Playfair'>Mujeres – Vestido largo o a media pierna </p>
      <p className='Playfair'>Se reserva el color blanco y gris </p>
      <p className='Playfair'>Lluvia de sobres</p>
    </div>
  </div>
    <ContactUs />
  </div>
  );
};

export default HomePage;
