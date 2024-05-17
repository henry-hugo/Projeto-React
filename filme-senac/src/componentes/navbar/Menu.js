import { Item } from "../styles/lista";
import { ImagemLogo } from "../styles/imagem";
import { Lista } from "../styles/lista";
import { Menu, Link } from "../styles/texto";


const lista= ['Lançamentos', 'Blog', 'Fale Conosco'];

function MenuBar(){
    return <Menu>
        <ImagemLogo src="https://media.cdnandroid.com/item_images/1307917/imagen-pobreflix-filmes-e-series-0ori.jpg"/>
        <Lista>
            {
              lista.map((item) => {
                return <Item style={{color:"white"}}><Link href={item} target="_blank">{item}</Link></Item>
            })
            
            }
        </Lista>
   </Menu>
}

export default MenuBar;
