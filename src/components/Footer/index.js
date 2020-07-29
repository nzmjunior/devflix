import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.devflix.nzm/">
        <img src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Vídeos de
        {' '}
        <a href="https://www.devflix.nzm">
        Desenvolvimento
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
