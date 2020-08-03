import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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

                <FormField
                    label="Nome da Categoria"
                    type="text" 
                    nome="Nome"
                    valor={valores.nome}
                    onChange={handleChange}
                />

                {/* <label>
                    Descrição:
                    <textarea 
                        type="text" 
                        name="descricao"
                        value={valores.descricao} 
                        onChange={handleChange}/>
                </label> */}

                <FormField
                    label="Descrição"
                    type="textarea" 
                    nome="Descrição"
                    valor={valores.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    nome="Cor" 
                    valor={valores.cor}
                    onChange={handleChange}
                />

                <div>
                </div>
                <Button>Cadastrar</Button>
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