import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form className="meuForm">

        <label>
          Nome da Categoria:
          <input
            autofocus="autofocus"
            type="text"
            placeholder="Nome da categoria"
            required="required"
          />  
        </label>

        <button class="botao">
          Cadastrar
        </button>
      </form>

      <Link className="linkPara" to="/">
        Ir para home
      </Link>

    </PageDefault>
  )
}

export default CadastroCategoria;