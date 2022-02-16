import React from 'react'
import './invite.css';
import wedding from '../../assets/wedding4.svg';

const Invite = () => {
  return (
    <div className='inviteContent'>
        <div className='parentsContent'>
            <div className='parents'>
                <h3>Yolanda Herrera</h3>
                <h3>Mauricio Pineda</h3>
            </div>
            <div className='parents'>
                <h3>Myriam Alba</h3>
                <h3>Marco Zafra</h3>
            </div>
        </div>
        <div className='inviteNote'>
            <h3>Los invitan al matrimonio de sus hijos</h3>
            <h2>Laura y Sebastian</h2>
            <p>el día 4 de junio de 2022</p>
            <img className='image' src={wedding} alt='boda'/>
        </div>
    </div>
  )
}

export default Invite