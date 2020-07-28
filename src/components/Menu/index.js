import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './styles.css'
import Button from '../Button';

export default function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AnimeFlix logo"/>
            </a>
            <Button as="a" href="/" className="ButtonLink">Novo Vídeo</Button>
        </nav>
    )
}