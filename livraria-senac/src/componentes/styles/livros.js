import styled from "styled-components";

export const Container = styled.div`
    display:inline-flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,1);
    transition: 0.3s;
    width: 20%;
    margin: 1rem;
`;

export const Titulo = styled.h1`
    font-size: ${props => props.tamanho || '20px'};
    color: ${props => props.cor || 'white'};
    line-weight: 1.5rem;
`;

export const Autor = styled.p`
    font-size: ${props => props.tamanho || '15px'};
    color: ${props => props.cor || 'white'};
    line-weight: 1.5rem;
`;

export const Ano = styled.p`
    font-size: ${props => props.tamanho || '15px'};
    color: ${props => props.cor || 'white'};
    line-weight: 1.5rem;
`;

export const Preco = styled.p`
    font-size: ${props => props.tamanho || '15px'};
    color: ${props => props.cor || 'red'};
    line-weight: 1.5rem;
`;