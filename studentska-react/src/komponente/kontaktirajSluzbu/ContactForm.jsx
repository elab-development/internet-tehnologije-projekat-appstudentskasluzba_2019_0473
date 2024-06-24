// ContactForm.jsx
import React, { useState } from 'react';
import { AuthProvider } from '../../AuthContext'; // Import AuthProvider-a
import './ContactForm.css'; // Import stilova

const ContactForm = ({ molbe, setMolbe }) => {
  const [ime, setIme] = useState(''); // Stanje za ime
  const [email, setEmail] = useState(''); // Stanje za email
  const [molba, setMolba] = useState(''); // Stanje za molbu
  const [indeks, setIndeks] = useState(''); // Stanje za indeks
  const [alert, setAlert] = useState(''); // Stanje za alert poruku
  const { loggedIn } = useAuth(); // Dohvatamo loggedIn status iz AuthContext-a

  // Funkcija za rukovanje slanjem forme
  const handleSubmit = (e) => {
    e.preventDefault(); // Sprečavanje podrazumevanog ponašanja forme
    if (ime && indeks && email && molba) {
      const novaMolba = {
        ime,
        indeks,
        email,
        molba,
      };
      setMolbe([...molbe, novaMolba]); // Dodavanje nove molbe u stanje
      setAlert('Molba uspešno poslata!'); // Postavljanje alert poruke
      // Resetovanje polja forme
      setIme('');
      setIndeks('');
      setEmail('');
      setMolba('');
    } else {
      setAlert('Molimo Vas da popunite sva polja.'); // Postavljanje alert poruke za nepopunjena polja
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Kontaktirajte nas</h2>
      {loggedIn ? (
        // Forma za kontakt koja se prikazuje ako je korisnik prijavljen
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
      ) : (
        // Poruka koja se prikazuje ako korisnik nije prijavljen
        <p>Morate biti prijavljeni da biste popunili kontakt formu.</p>
      )}
      {alert && <div className="alert">{alert}</div>} {/* Prikazivanje alert poruke */}
    </div>
  );
};

export default ContactForm;