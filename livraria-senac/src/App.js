import { Route, Routes } from 'react-router-dom';
import './App.css';
import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
//import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
import MenuBar from './componentes/navbar/Menu';
import Pesquisa from './componentes/pesquisa/Pesquisa';
import Register from './componentes/register/Register';
import Login from './componentes/login/login';


function App() {
  return (
    <div className="App">
      <MenuBar/>

      <Routes>
        <Route path='/' element={
          <>
            <header className="App-header">
              <Pesquisa/>
            </header>
            <hero className="App-hero">
              <Maisbuscados/>
            </hero>
          </>
        } />
        <Route path='/register' element={ <Login/> }/>
        
        
      </Routes>
    </div>
  );
}

export default App;
