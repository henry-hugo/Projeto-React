import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../styles/pesquisa";

const baseUrl = 'http://localhost:8000'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            alert('Preencha todos os campos!')
            return;
        }

        const data = { name, email, password };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };

        try {
            const res = await fetch(`${baseUrl}/register`, options);

            if (!res.ok) {
                alert('Falha ao salvar os dados!')
                return;
            }

            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container direction="column" gap="24px" width="unset">
            <h1>Tela de cadastro</h1>
            <Container gap="12px" direction="column" >
                <input type="text" placeholder="Nome"  value={name} onChange={ (e) => setName(e.target.value) }/>
                <input type="email" placeholder="E-mail"  value={email} onChange={ (e) => setEmail(e.target.value) } />
                <input type="password" placeholder="Senha"  value={password} onChange={ (e) => setPassword(e.target.value) } />
                <Container gap="12px">
                    <Link to="/">
                        <button type="button" backgroundColor="#e7e7e7" color="#000">Voltar</button>
                    </Link>
                    <button type="button" onClick={ (e) => {handleSubmit(e)} }>Salvar</button>
                </Container>
            </Container>
        </Container>
    );
};

export default Register;