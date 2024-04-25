import React, {useState} from "react";

const Register = () => {
    const [formData, setFormData] = useState({name:'',password:''});
    const [feedBack, setFeedBack] =useState({message:'',type:''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/addUser',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                setFeedBack({message: 'Cadastrado', type: 'sucesso'})
            }else{
                const erro = await response.json()
                setFeedBack({message: erro.message, type: 'erro'})
            }
            setFormData({name:'', password:''})
        } catch (error) {
            console.error(error)
            setFeedBack({message: "Falha", type:"erro"})
        }
    }

    return (
        <div>
            <h1>Tela de cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>

                    <button type="submit" >Cadastrar</button>
            </form>
                {
                    feedBack.message && (
                        <div className={feedBack.type}>
                            {feedBack.message}
                        </div>
                    )
                }
        </div>
        
    );
};

export default Register;