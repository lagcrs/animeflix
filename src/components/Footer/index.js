import React from 'react';
import { FooterBase } from './styles';

export default function Footer() {
    return (
        <FooterBase>
            <a href="http:///www.alura.com.br/">
                <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
            </a>
            <p>
                Orgulhosamente criado por Larissa Silva durante a { ' ' }
                <a href="http://http:///www.alura.com.br/">Imersão React da Alura</a>
            </p>
        </FooterBase>
    )
}