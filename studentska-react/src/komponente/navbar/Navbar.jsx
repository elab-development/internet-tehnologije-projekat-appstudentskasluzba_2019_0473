// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; // Uvezemo useAuth

const Navbar = () => {
  const { loggedIn } = useAuth(); // Uzimamo loggedIn status

  return (
    <nav>
      {/* Prazan red za bolju čitljivost */}
      
      <ul>
        <li>
          <Link to="/">Pocetna</Link>
        </li>
        <li>
          <Link to="/molbe">Molbe</Link>
        </li>
        <li>
          {loggedIn ? (
            <Link to="/kontakt">Kontaktiraj nas</Link>
          ) : (
            <Link to="/register">Prijavi se</Link>
          )}
        </li>
        <li>
          <Link to="/predmeti">Predmeti</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;