import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const[name,setName]= useState('');
    const[password, setPassword] = useState('');
    const[error, setError]= useState('');

    const navigate= useNavigate();

    const handleLogin = async () =>{
        try {
            const response = await fetch('http://localhost:8080/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, password})
        }); 

        if(response.ok){
            navigate('/home');
        }else{
            setError('Dados Inexistentes.');
        }

        } catch (error) {
            console.error(error);
        }
    }
    return <div>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Usuario"/>

        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"/>

        <button onClick={handleLogin}>
            Entrar
        </button>
        {error && <p>{error}</p>}
        
    </div>
}
export default Login;