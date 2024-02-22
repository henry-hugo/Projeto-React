import { Toolbar, Typography } from "@mui/material";
import './main.css';


function AppMain(){
    return(
        <>
        <Toolbar className="main"> 
            <Typography className="card">
            <section class="container grid grid-template-columns">
	            <div class="item1"><h2>Restaurante</h2><p >Opção</p></div>
                <div class="item2"><h2>Mercado</h2><p >Buscar Lojas</p></div>
            </section>
            </Typography>
        </Toolbar>
        </>
        )
    }
    export default AppMain;