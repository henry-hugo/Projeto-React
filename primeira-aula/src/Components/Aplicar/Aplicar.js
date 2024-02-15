
import { Button, Toolbar, Typography} from "@mui/material";
import './Aplicar.css';

function AppBar(){
    return(
        <>
        
        <Toolbar className="toolBar">
          <Typography  variant="h6" className="logo">
                <img className="tamanho" src="https://logopng.com.br/logos/ifood-43.png"/>
            </Typography> 
          <div className="navLinks">
            <Typography className="link" href="">Link 1</Typography>
            <Typography className="link" href="">Link 2</Typography>
            <Typography className="link" href="">Link 3</Typography>
            <Typography className="link" href="">Link 4</Typography>
          </div>
          <div className="btn_c">
            <Typography className="link login" href=""> Cria conta</Typography>
            <Button className="btn_red">Entra</Button>
          </div>
        </Toolbar>
        </>
    )
}

export default AppBar;

