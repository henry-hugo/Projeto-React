import './App.css';
import MenuBar from './componentes/navbar/Menu';
import { Titulo, Subtitulo, Texto, Menu, Item, Lista } from './componentes/navbar/styles/texto';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <header className="App-header">
      <Titulo cor="blue">Título de TCC e subtítulo: o que diz a ABNT e exemplos</Titulo>
      <Subtitulo cor="green">Elemento deve ser escolhido pensando em estimular a leitura do trabalho.</Subtitulo>
      <Texto cor="#fff">O título de TCC e o subtítulo são fundamentais no trabalho de conclusão de curso. Além disso, eles devem estar em conformidade com as normas da ABNT.</Texto>
      
      </header>
    </div>
  );
}

export default App;
