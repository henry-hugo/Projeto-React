import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:${props => props.direcao || 'row'};
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin: 1rem;
`;