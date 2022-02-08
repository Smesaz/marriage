import React from 'react';
import './homePage.css';
import wedding from '../assets/wedding4.svg';
import NavBar from './navBar/navBar.jsx';
import ContactUs from './contactUs/contactUs.jsx';

const HomePage = () => {

  return (
  <div>
    <NavBar/>
  <div className='containerHome'>
    <div className='col1'>
      <img className='image' src={wedding} alt='boda'/>
    </div>
    <div className='col2'>
      <h1 className='Playfair'>Laura y Sebastián</h1>
      <h1 className='Monsieur'> junto con sus familias</h1>
      <h2 className='Questrial'>Tienen el gusto de invitarte a su boda el </h2>
      <h1 className='Monsieur'>sábado, 4 de junio de 2022</h1>
      <h1 className='Monsieur'>4 pm. Misa nupcial en la Parroquia Santa Bibiana </h1>
      <h2 className='Questrial'>Usaquén</h2>
      <h1 className='Monsieur'>6 pm. Recepción en el Hotel Estelar La Fontana </h1>
      <h2 className='Questrial'>Salón Cigarra</h2>
      <h2 className='Questrial'>Código de vestimenta</h2>
      <p className='Questrial'>Hombres – Traje formal y corbata</p>
      <p className='Questrial'>Mujeres – Vestido largo o a media pierna </p>
      <p className='Questrial'>Se reserva el color blanco y gris </p>
      <p className='Questrial'>Lluvia de sobres</p>
    </div>
  </div>
    <ContactUs />
  </div>
  );
};

export default HomePage;
