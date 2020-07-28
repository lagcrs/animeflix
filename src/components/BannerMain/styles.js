import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
    margin-left: 5%;
    margin-right: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
    @media (max-width: 800px) {
        padding-top: 100px;
        flex-direction: column;
    }
`;