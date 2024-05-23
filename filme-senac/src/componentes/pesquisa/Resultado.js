
import { ImagemFilme } from "../styles/imagem";
import { Container, Titulo, Autor, Ano } from "../styles/filme";
import { Link } from "../styles/texto";

const Resultado = ({filmes})=>{
    if (!Array.isArray(filmes)) {
        return<p>Não temos nenhum filme com esse nome!!</p>
    }
    return(
        <div>
            <h2></h2>
            {
                filmes.map((filme) =>{
                    return (
                        <Container key={filme.id}>
                            <Link href={filme.link} target="_blank">
                            <Titulo>{filme.titulo}</Titulo>
                            <Autor>{filme.categoria}</Autor>
                            <Ano>{filme.ano}</Ano>
                            <ImagemFilme src={filme.imagem}></ImagemFilme>
                            </Link>
                        </Container>
                    )
                })
            }
        </div>
    );
}
export default Resultado;
