import { useEffect,  useState } from "react";
import { ImagemLivro } from "../styles/imagem";
import { Container, Titulo, Autor, Ano } from "../styles/livros";
import { Link } from "../styles/texto";

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
                livros.map((filmes) =>{
                    return <>
                        <Container>
                            <Link href="{filmes.link}">
                            <Titulo>{filmes.titulo}</Titulo>
                            <Autor>{filmes.categoria}</Autor>
                            <Ano>{filmes.ano}</Ano>
                            <ImagemLivro src={filmes.imagem}></ImagemLivro>
                            </Link>
                        </Container>
                    </>
                })
            }
        </div>
        
    )
}
export default Maisbuscados;



//<p>{livros[0] ?livros[0].titulo:''}</p>