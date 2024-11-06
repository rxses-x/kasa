import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div >
        <Logo className="header__logo" />
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