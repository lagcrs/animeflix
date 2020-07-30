import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './styles.css'
import Button from '../Button';

export default function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AnimeFlix logo"/>
            </Link>
            <Button as={ Link } to="/cadastro/video" className="ButtonLink">Novo Vídeo</Button>
        </nav>
    )
}