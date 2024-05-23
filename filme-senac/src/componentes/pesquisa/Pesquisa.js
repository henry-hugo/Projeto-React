import { Titulo } from "../styles/filme";
import { Container } from "../styles/pesquisa";
import { useState } from "react";
import Resultado from "./Resultado";
import "./pesquisa.css";

const Pesquisa = () => {
    const [termoBusca, setTermoBusca] = useState('');
    const [Filmes, setFilmes] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/buscarFilmes/${termoBusca}`);
            const data = await response.json();
            setFilmes(data); // Alterado para definir diretamente os dados retornados
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <Titulo tamanho="40px">Qual o filme você deseja?</Titulo>
            <div className="search">
                <input placeholder="Digite aqui"
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>🔍</button>
            </div>
        
            <Resultado filmes={Filmes} />
        </Container>
    );
}

export default Pesquisa;
