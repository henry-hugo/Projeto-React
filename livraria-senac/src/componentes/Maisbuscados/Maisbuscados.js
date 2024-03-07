import { useEffect } from "react";

const Maisbuscados = () => {
    const[livros, setLivros] = useState([]);

    useEffect(()=>{
        const buscarLivros =async () => {
            try {
                const resposta = fetch('http://localhost:8080/minhaRota');
                const dados = (await resposta).json
                setLivros(dados);
            } catch (error) {
                console.error(error);
            }
        }
    },[])
    return(
        <>

        </>
    )
}