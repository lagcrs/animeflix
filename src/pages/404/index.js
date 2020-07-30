import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import error404 from '../../assets/img/error404.png';
import styled from 'styled-components';

const Img = styled.img`
    max-width: 200px;
`;

export default function CadastroCategoria() {
    return (
        <PageDefault>
            <Img src={error404} alt="Confused Anime Girl"/>
            <h1>Umm... essa página não existe :(</h1>
            <p>Infelizmente, não encontramos essa página. Você encontra muitos outros títulos na página inicial!</p>
            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}