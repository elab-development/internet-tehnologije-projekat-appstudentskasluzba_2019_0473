import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
 
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Pocetna</Link>
        </li>
        <li>
          <Link to="/predmeti">Lista predmeta</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontaktiraj sluzbu</Link>
        </li>
        <li>
          <Link to="/molbe">Molbe studenata</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
