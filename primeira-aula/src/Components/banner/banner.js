import { Toolbar, Typography } from "@mui/material";
import './banner.css';

function AppBanner(){
    return(
        <>
        <Toolbar className="hero">
            <Typography className="banner">
                <h1>Faça mercado no iFood</h1>
                <p>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
                <form>
                    
                    <input type="search" id="site-search" className="q" />
                    <button className="btn_red">Ver mercados próximos</button>
                </form>
                <div className="espaco"></div>
            </Typography>
        </Toolbar>

        </>
    )
}
export default AppBanner;