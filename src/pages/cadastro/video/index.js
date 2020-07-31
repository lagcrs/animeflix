import React from './node_modules/react';
import PageDefault from '../../../components/PageDefault';
import { Link } from './node_modules/react-router-dom';

export default function CadastroVideo() {
    return (
        <PageDefault>
            <h1>
                Cadastro de Vídeo Anime
            </h1>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}