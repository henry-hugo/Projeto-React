import { useEffect,  useState } from "react";
import { ImagemLivro } from "../styles/imagem";
import { Container, Titulo, Autor, Preco, Ano } from "../styles/livros";

const Maisbuscados = () => {
    const[livros, setLivros] = useState([]);

    useEffect(()=>{
        const buscarLivros =async () => {
            try {
                const resposta = await fetch('http://localhost:8080/minhaRota');
                const dados = await resposta.json();
                console.log(dados)
                setLivros(dados);
            } catch (error) {
                console.error(error);
            }
        }
        buscarLivros();
    },[])
    return(
        <div>
            <h2></h2>
            {
                livros.map((livros) =>{
                    return <>
                        <Container>
                            <Titulo>{livros.titulo}</Titulo>
                            <Autor>{livros.autor}</Autor>
                            <Ano>{livros.ano}</Ano>
                            <ImagemLivro src={livros.imagem}></ImagemLivro>
                            <Preco>{livros.preco}</Preco>
                        </Container>
                    </>
                })
            }
        </div>
        
    )
}
export default Maisbuscados;



//<p>{livros[0] ?livros[0].titulo:''}</p>