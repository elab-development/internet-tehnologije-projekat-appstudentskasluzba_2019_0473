import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ molbe, setMolbe }) => {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [molba, setMolba] = useState('');
  const [indeks, setIndeks] = useState('');
  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ime && indeks && email && molba) {
      const novaMolba = {
        ime,
        indeks,
        email,
        molba,
      };
      setMolbe([...molbe, novaMolba]);
      setAlert('Molba uspešno poslata!');
      setIme('');
      setIndeks('');
      setEmail('');
      setMolba('');
    } else {
      setAlert('Molimo Vas da popunite sva polja.');
    }
  };

  return (
      <div className="contact-form-container">
        <h2>Kontaktirajte nas</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-container">
            <label htmlFor="ime">Ime i prezime:</label>
            <input
              type="text"
              id="ime"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
              placeholder="Unesite vaše ime i prezime"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="indeks">Broj indeksa:</label>
            <input
              type="text"
              id="indeks"
              value={indeks}
              onChange={(e) => setIndeks(e.target.value)}
              placeholder="Unesite vaš broj indeksa"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Unesite vašu email adresu"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="molba">Vaša molba:</label>
            <textarea
              id="molba"
              value={molba}
              onChange={(e) => setMolba(e.target.value)}
              placeholder="Unesite vašu molbu"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Pošalji poruku
          </button>
        </form>
        {alert && <div className="alert">{alert}</div>}
      </div>
  );
};

export default ContactForm;