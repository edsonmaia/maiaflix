import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function NovoVideo() {
  return (
    <PageDefault>
      <h1>Novo Vídeo</h1>

      <Link className="linkPara" to="/"> Ir para home </Link>

        <form className="meuForm">

        <label>
            <input
                autofocus="autofocus"
                id="titulo"
                name="titulo"
                type="text"
                placeholder="Título"
            />
        </label>

        <label>
            <input
                id="linkVideo"
                name="linkVideo"
                type="text"
                placeholder="Link do vídeo"
            />
        </label>

        <label>
            <input
                id="linkImagem"
                name="linkImagem"
                type="text"
                placeholder="Link da imagem do vídeo"
            />
        </label>

        <label>
            <select
                id="listaCategoria"
                name="listaCategoria"
                placeholder="Escolha uma categoria"
            >
                <option value="Geografia">Geografia</option>
                <option value="Cultura">Cultura</option>
                <option value="Tecnologia">Tecnologia</option>
            </select>
        </label>

        <label>
            <textarea
                id="descricao"
                name="descricao"
                placeholder="Descrição do vídeo">
            </textarea>
        </label>
        
        <label>
            <input
                id="codigoSeguranca"
                name="codigoSeguranca"
                type="text"
                placeholder="Código de segurança"
            />
        </label>
        
        <div id="botoes">
            <button className="botao" id="botaoSalvar" type="submit">Salvar</button>
        <span> </span>
            <button className="botao" id="botaoLimpar" type="reset">Limpar</button>
        </div>

        </form>

    </PageDefault>
  )
}

export default NovoVideo;
