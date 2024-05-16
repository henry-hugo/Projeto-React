import { Titulo } from "../styles/livros";
import { Texto } from "../styles/texto";
import { Container } from "../styles/pesquisa";
import { useState } from "react";
import Resultado from "./Resultado";


const Pesquisa = () =>{
    
    const[termoBusca, setTermoBusca] = useState('');
    const [livros, setLivros] = useState([]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/buscarLivros/${termoBusca}`);
            const data = await response.json();
            setLivros([data])
        } catch (error){
            console.error(error);
        }
        }
    return(
        <Container>
            <Titulo>Encontre seu próximo livro</Titulo>
            <Texto>Explore por títulos, o livro desejado</Texto>
            <input placeholder="Digite"
            value={termoBusca}
            onChange={(e)=>setTermoBusca(e.target.value)}
            />
            <button onClick={handleSubmit}>Buscar</button>
            <Resultado livros={livros}/>
        </Container>
        
            
    );
}
export default Pesquisa;