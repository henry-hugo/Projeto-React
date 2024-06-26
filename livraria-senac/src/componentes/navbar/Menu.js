import { Item } from "../styles/lista";
import { ImagemLogo } from "../styles/imagem";
import { Lista } from "../styles/lista";
import { Menu } from "../styles/texto";
import { Link } from "react-router-dom";

const lista= ['Lançamentos', 'Blog', 'Fale Conosco'];

function MenuBar(){
    return <Menu>
        <ImagemLogo src="https://static.vecteezy.com/system/resources/previews/000/601/874/original/vector-digital-print-logo-design.jpg"/>
        <Lista>
            {
                lista.map((item) =>{
                    return <Item>{item}</Item>
                })
            }
            <Item>
                <Link to="/register">cadastro</Link>
            </Item>
        </Lista>
   </Menu>
}

export default MenuBar;
