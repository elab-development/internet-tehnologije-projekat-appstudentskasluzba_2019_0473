import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="contact-details">
          <p>Elektronska posta: studentska@fon.bg.ac.rs</p>
          <div className='telefoni'>
          <h4>Telefoni:</h4>
          <p>+381 11 3950 809  Službenik za diplomske i završne radove </p>
          <p>+381 11 3950 811  Službenik za ispite</p>
          <p>+381 11 3950 810  Službenik za studentska pitanja</p>
          </div>
          <p>Radno vreme: 10-13h </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
