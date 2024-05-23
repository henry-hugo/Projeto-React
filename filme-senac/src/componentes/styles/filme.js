import styled from "styled-components";

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem; /* Ajuste o padding conforme necessário */
    box-shadow: 0 4px 8px 0 rgba(255,0,0,1);
    transition: 0.3s;
    width: 300px; /* Ajustado para 200px */
    margin: 1rem;
`;


export const Titulo = styled.h1`
    font-size: ${props => props.tamanho || '17px'};
    color: ${props => props.cor || 'white'};
    line-weight: 1.5rem;
`;

export const Autor = styled.p`
    font-size: ${props => props.tamanho || '10px'};
    color: ${props => props.cor || 'white'};
    line-weight: 1.5rem;
`;

export const Ano = styled.p`
    font-size: ${props => props.tamanho || '10px'};
    color: ${props => props.cor || 'white'};
    line-weight: 1.5rem;
`;

export const Preco = styled.p`
    font-size: ${props => props.tamanho || '10px'};
    color: ${props => props.cor || 'black'};
    line-weight: 1.5rem;
`;