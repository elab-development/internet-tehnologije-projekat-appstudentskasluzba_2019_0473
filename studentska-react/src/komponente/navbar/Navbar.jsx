import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  function handleLogout() {
    localStorage.removeItem("user");
  }

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

        {localStorage.hasOwnProperty("user") ? (
          <li className="extra-bold text-white">
            <button className="text-white text-bold" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/register">Log in</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
