import React from 'react'; 
import { useState } from 'react';
import './Pocetna.css';

function Pocetna() {

    const [prikaziModal, setPrikaziModal] = useState(false);

    const toggleModal = () => {
      setPrikaziModal(!prikaziModal);
    };


    return (
        <div className="pocetna">
          <div className="pocetna-div">
            <img src="https://fon.bg.ac.rs/wp-content/uploads/2023/10/FON-Logo.svg" alt="Logo FONA" className="Fon-logo" />
            <h1>Dobrodošli na aplikaciju studentske službe FONA</h1>
            <p>
              Fakultet organizacionih nauka je jedan od vodećih fakulteta u regionu, 
              posvećen pružanju kvalitetnog obrazovanja i inovativnog istraživanja.
            </p>
            <button onClick={toggleModal}>Dodatne informacije</button>
            {prikaziModal && (
              <div className="modal">
              <p>Dodatne kontakt informacije o studentskoj službi:</p>
              <ul>
                <li>Rukovodilac službe: Jovana Tsarević Damjanović</li>
                <li>Radno vreme: 11.00-13.00 časova</li>
                <li>Kabinet: B001</li>
                <li>El. pošta: studentska@fon.bg.ac.rs</li>
                <li>Telefon:</li>
                <ul>
                  <li>+381 11 3950 809 Službenik za diplomski i završne radove</li>
                  <li>+381 11 3950 811 Službenik za ispite</li>
                  <li>+381 11 3950 810 Službenik za studentska pitanja</li>
                  <li>+381 11 3950 813 Službenik za studentska pitanja</li>
                  <li>+381 11 3950 874 Službenik za alumni i studentsku praksu</li>
                </ul>
              </ul>
              <a href="http://praksa.fon.bg.ac.rs">http://praksa.fon.bg.ac.rs</a>
              <button onClick={toggleModal}>Zatvori</button>
            </div>
            )}
          </div>
        </div>
      );
}

export default Pocetna;