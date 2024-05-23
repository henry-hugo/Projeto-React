import { useEffect,  useState } from "react";
import { ImagemFilme} from "../styles/imagem";
import { Container, Titulo, Autor, Ano } from "../styles/filme";
import { Link } from "../styles/texto";

const Maisbuscados = () => {
    const[Filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const buscarFilmes =async () => {
            try {
                const resposta = await fetch('http://localhost:8080/minhaRota');
                const dados = await resposta.json();
                console.log(dados)
                setFilmes(dados);
            } catch (error) {
                console.error(error);
            }
        }
        buscarFilmes();
    },[])
    return(
        <div>
            <h2></h2>
            {
                Filmes.map((filmes) =>{
                    return <>
                        <Container>
                            <Link href={filmes.link} target="_blank">
                            <Titulo>{filmes.titulo}</Titulo>
                            <Autor>{filmes.categoria}</Autor>
                            <Ano>{filmes.ano}</Ano>
                            <ImagemFilme src={filmes.imagem}></ImagemFilme>
                            </Link>
                        </Container>
                    </>
                })
            }
        </div>
        
    )
}
export default Maisbuscados;



//<p>{filmes[0] ?filmes[0].titulo:''}</p>