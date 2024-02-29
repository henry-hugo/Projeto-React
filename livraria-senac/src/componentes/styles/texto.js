import styled from "styled-components";

//componentes de styles para
//os textos

export const Titulo = styled.h1`
    font-size: ${props => props.tamanho || '32px'};
    color: ${props => props.cor || 'black'};
    line-weight: 1.5rem;
`;

export const Subtitulo = styled.h2`
    font-size: ${props => props.tamanho || '20px'};
    color: ${props => props.cor || 'black'};
    line-weight: 1.5rem;
`;

export const Texto = styled.p`
    font-size: ${props => props.tamanho || '14px'};
    color: ${props => props.cor || 'black'};
    line-weight: 1.5rem;
`;

export const Menu = styled.nav`
    display:flex;
    height: 50px;
    background-color: white;
    aling-items: center;
    justify-content: space-around;
`;