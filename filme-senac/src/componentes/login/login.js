import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

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
            navigate('/Home');
        }else{
            setError('Dados Inexistentes.');
        }

        } catch (error) {
            console.error(error);
        }
    }
    return<body>
         <section>
         <span></span>
            <span></span>
            <span></span>
            <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>


   <div class="signin"> 

    <div class="content"> 

     <h2>Login</h2> 

     <div class="form"> 

      <div class="inputBox"> 

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
         <i>Username</i> 

      </div> 

      <div class="inputBox"> 

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
         <i>Password</i> 

      </div> 

      <div class="links"> <a href="/register">Cadastro</a>

      </div> 

      <div class="inputBox"> 

      <input type="submit" onClick={handleLogin} value={"Entrar"}/>
            
        {error && <p style={{ color: 'white' }}>{error}</p>
}

      </div> 

     </div> 

    </div> 

   </div> 
        
        
    </section>
    </body>
}
export default Login;

      

        

        