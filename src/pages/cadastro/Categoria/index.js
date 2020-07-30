import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Categoria = styled.span`
    color: var(--primary);
`; 

export default function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ""
    }
    const [categorias, setCategorias] = useState([])
    const [valores, setValores] = useState(valoresIniciais);

    const setValor = (chave, valor) => {
        setValores({
            ...valores,
            [chave]: valor
        })
    }

    const handleChange = e => {
        setValor(e.target.getAttribute('name'), e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setCategorias([...categorias, valores]);
        setValores(valoresIniciais)
    };

    console.log('Categorias', categorias)
    
    return (
        <PageDefault>
            <h1>
                Cadastro de Categoria: <Categoria>{valores.nome}</Categoria> 
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome da Categoria:
                        <input 
                            type="text" 
                            name="nome"
                            value={valores.nome} 
                            onChange={handleChange}/>
                    </label>
              
                    <label>
                        Descrição da Categoria:
                        <textarea 
                            type="text" 
                            name="descricao"
                            value={valores.descricao} 
                            onChange={handleChange}/>
                    </label>

                    <label>
                        Cor da Categoria:
                        <input 
                            type="color"
                            name="cor" 
                            value={valores.cor} 
                            onChange={handleChange}/>
                    </label>
                </div>
                <button>Cadastrar</button>
            </form>

            <ul>
                {
                    categorias.map((categoria, i) => {
                        return (
                            <li key={`${categoria}${i}`}>
                                {categoria.nome}
                            </li>
                        )
                    })
                }
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}