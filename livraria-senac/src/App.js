import './App.css';
import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
//import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
import MenuBar from './componentes/navbar/Menu';
import Pesquisa from './componentes/pesquisa/Pesquisa';
import {  } from './componentes/styles/texto';


function App() {
  return (
    <div className="App">
      <MenuBar/>
      <header className="App-header">
        <Pesquisa/>
      </header>
      <hero className="App-hero">
        <Maisbuscados/>
      </hero>
    </div>
  );
}

export default App;
