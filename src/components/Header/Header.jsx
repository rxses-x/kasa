import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
      <img src={logo} alt="Kasa Logo" />
      </div>
      <nav className="navigation">
        <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
            Accueil
        </NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? 'active' : '')}>
        A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;