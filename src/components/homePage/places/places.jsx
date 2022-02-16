import React from 'react'
import './places.css';

const Places = () => {
  return (
    <>  
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img alt='' src= {require("../../assets/parroquia.jpg")}/>
                    <h3>Ceremonia</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Hora: 4:30 pm</p>
                    <h4>Parroquia Santa Bibiana</h4>
                    <p>Cra 1A este N° 109 ' 85</p>
                        <a href="https://www.google.com/maps/place/Parroquia+Santa+Bibiana+-+Arquidi%C3%B3cesis+de+Bogot%C3%A1/@4.6863772,-74.0332364,16z/data=!4m5!3m4!1s0x8e3f900a952d2ac9:0x1b2634294ed571ef!8m2!3d4.6862588!4d-74.0284921?hl=es">
                            Como Llegar
                            <img alt='' src="https://img.icons8.com/color/16/000000/google-maps.png"/>
                            </a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img alt='' src= {require("../../assets/hotel.jpg")}/>
                    <h3>Recepción</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                <p>6:00 pm</p>
                    <h4>Hotel Estelar La Fontana</h4>
                    <p>Salón Cigarra</p>
                    <p>Avenida 127, N° 15 A - 10</p>
                        <a href="https://www.google.com/maps/place/Hotel+Estelar+La+Fontana/@4.7040903,-74.0441436,18.5z/data=!4m16!1m7!3m6!1s0x8e3f9ab2ee119c93:0x8de22ee8aa402577!2sAv.+Rodrigo+Lara+Bonilla+%23%2315a-10,+Bogot%C3%A1!3b1!8m2!3d4.7045962!4d-74.0435845!3m7!1s0x8e3f9ab2e9565caf:0x10d0ddf59c02d2e1!5m2!4m1!1i2!8m2!3d4.704947!4d-74.0435987?hl=es">
                            Como Llegar 
                            <img alt='' src="https://img.icons8.com/color/16/000000/google-maps.png"/>
                            {/* <img src="https://img.icons8.com/fluency/15/000000/google-maps-new.png"/> */}
                            </a>
                </div>
            </div>
        </div>
    </div>
        <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img alt='' src="https://img.icons8.com/external-filled-outline-02-chattapat-/150/000000/external-couple-spring-filled-outline-02-chattapat-.png"/>
                    <h3>Código de Vestimenta</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content2">
                    <h4>Hombres</h4>
                    <p>Traje formal con corbata</p>
                    <h4 margin-top='10px'>Mujeres</h4>
                    <p>Vestido largo o media pierna</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                <img alt='' src="https://img.icons8.com/external-justicon-lineal-color-justicon/140/000000/external-gift-diwali-justicon-lineal-color-justicon.png"/>
                    <h3>Regalo</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h4>Lluvia de sobres</h4>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Places