import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

        <Link className="linkPara" to="/">
          Ir para home
        </Link>
        
        <Link className="linkPara" to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
        
        <Link className="linkPara" to="/cadastro/novovideo">
          Novo Vídeo
        </Link>

    </PageDefault>
  )
}

export default CadastroVideo;