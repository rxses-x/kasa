import React from 'react';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa Logo" className='footer__logo' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;