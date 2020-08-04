/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';

import Erro404 from '../../assets/img/erro404.png';

function Pagina404() {
  return (
    <PageDefault>
      <h1>Página não localizada</h1>
      <Link
        id="btVoltar"
        className="linkPara"
        to="/"
      >
        Voltar para home
      </Link>
      <figure className="imgCentro" >
        <img src={ Erro404 } alt="Erro 404" />
        <br />
      </figure>
    </PageDefault>
  );
}

export default Pagina404;
