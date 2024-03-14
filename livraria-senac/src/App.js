import './App.css';
import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
//import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
import MenuBar from './componentes/navbar/Menu';
import {  } from './componentes/styles/texto';


function App() {
  return (
    <div className="App">
      <MenuBar/>
      <header className="App-header">
      <Maisbuscados/>
      </header>
    </div>
  );
}

export default App;
