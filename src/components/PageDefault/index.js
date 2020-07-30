import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main =  styled.main`
    background-color: #141414;
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-right: 5%;
    padding-left: 5%;
    padding-bottom: 150px;
    text-align: center;
`;

export default function PageDafault({ children }) {
    return (
        <>
            <Menu/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    )
}