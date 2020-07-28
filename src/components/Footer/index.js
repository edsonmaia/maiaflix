import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import { FaGlobeAmericas } from 'react-icons/fa';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>
      <p>
        Desenvolvido por Edson Maia <FaGlobeAmericas /> durante a 
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a> em 2020
      </p>
    </FooterBase>
  );
}

export default Footer;
