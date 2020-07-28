import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Erro404 from '../../assets/img/erro404.png';
import { FaGlasses } from 'react-icons/fa';

function Pagina404() {
  return (
    <PageDefault>
      <h1>Página não localizada</h1>
      
      <Link id="btVoltar" className="linkPara" to="/"> <FaGlasses /> Voltar para home </Link>
      
      <figure className="imgCentro" >
        <img src={ Erro404 } alt="Erro 404" /><br />
      </figure>
      
    </PageDefault>
  )
}

export default Pagina404;
