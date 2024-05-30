import { useEffect,  useState } from "react";
import { ImagemFilme} from "../styles/imagem";
import { Container, Titulo, Autor, Ano } from "../styles/filme";
import { Link } from "../styles/texto";

const Maisbuscados = () => {
    const [Filmes, setFilmes] = useState([]);

    useEffect(() => {
        const buscarFilmes = async () => {
            try {
                const resposta = await fetch('http://localhost:8080/minhaRota');
                const dados = await resposta.json();
                console.log(dados);
                setFilmes(dados);
            } catch (error) {
                console.error(error);
            }
        };
        buscarFilmes();
    }, []);

    // Organize os filmes por categoria
    const filmesPorCategoria = {};
    Filmes.forEach((filme) => {
        if (!filmesPorCategoria[filme.categoria]) {
            filmesPorCategoria[filme.categoria] = [];
        }
        filmesPorCategoria[filme.categoria].push(filme);
    });

    // Renderize os filmes por categoria e ordem
    return (
        <div>
            {Object.keys(filmesPorCategoria).map((categoria) => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    {filmesPorCategoria[categoria].map((filme) => (
                        <Container key={filme.titulo}>
                            <Link href={filme.link} target="_blank">
                                <Titulo>{filme.titulo}</Titulo>
                                <Autor>{filme.categoria}</Autor>
                                <Ano>{filme.ano}</Ano>
                                <ImagemFilme src={filme.imagem} />
                            </Link>
                        </Container>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Maisbuscados;



//<p>{filmes[0] ?filmes[0].titulo:''}</p>