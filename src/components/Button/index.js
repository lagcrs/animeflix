import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-size: 16px;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: inline-block;
    transition: opacity .3s;
    &:hover, 
    &:focus {
        opacity: .5;
    }
`;

export default Button;