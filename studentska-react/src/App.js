// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext'; // Uvezemo AuthProvider i useAuth
import Pocetna from './komponente/pocetna/Pocetna';
import ContactForm from './komponente/kontaktirajSluzbu/ContactForm';
import Register from './komponente/register/Register'; // Dodamo putanju do Register komponente
import Footer from './komponente/Footer/Footer';
import Navbar from './komponente/navbar/Navbar';
import Molbe from './komponente/molbe/Molbe';
import Predmeti from './komponente/predmeti/Predmeti';

function App() {
  const [molbe, setMolbe] = useState([]);
  const { loggedIn } = useAuth(); // Dohvatamo loggedIn status

  return (
    <div className="App">
      <AuthProvider> {/* Obmotamo aplikaciju sa AuthProvider */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pocetna />} />
            {/* Ako smo ulogovani prikazujemo ContactForm, inace prikazujemo Register */}
            <Route path="/kontakt" element={loggedIn ? <ContactForm molbe={molbe} setMolbe={setMolbe} /> : <Register />} />
            <Route path="/molbe" element={<Molbe molbe={molbe} setMolbe={setMolbe} />} />
            <Route path="/predmeti" element={<Predmeti />} />
            {}
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;