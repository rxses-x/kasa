import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo className='footer__logo'/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;