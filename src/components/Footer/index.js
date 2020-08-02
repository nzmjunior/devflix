import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="DevFlix logo" />
      </a>
      <p>
        Vídeos de
        {' '}
        <a href="/">
          Desenvolvimento WEB
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
