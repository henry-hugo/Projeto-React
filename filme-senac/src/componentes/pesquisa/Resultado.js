import { ImagemLivro } from "../styles/imagem";
import { Container, Titulo, Autor, Preco, Ano } from "../styles/livros";

const Resultado = ({livros})=>{
    if (!Array.isArray(livros)) {
        return<p>Não temos nenhum filme com esse nome!!</p>
    }
    return(
        <div>
            <h2></h2>
            {
                livros.map((livro) =>{
                    return (
                        <Container key={livro.id}>
                            <Titulo>{livro.titulo}</Titulo>
                            <Autor>{livro.autor}</Autor>
                            <Ano>{livro.ano}</Ano>
                            <ImagemLivro src={livro.imagem}></ImagemLivro>
                            <Preco cor="red">{livro.preco}</Preco>
                        </Container>
                    )
                })
            }
        </div>
    );
}
export default Resultado;
