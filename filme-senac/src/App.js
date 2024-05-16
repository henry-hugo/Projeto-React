
import './App.css';
import Login from './componentes/login/login';
import { Route, Routes } from 'react-router-dom';
import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
//import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
import Pesquisa from './componentes/pesquisa/Pesquisa';
import MenuBar from './componentes/navbar/Menu';
import Register from './componentes/register/Register';


function App() {
  return (
    <div className="App">
      <Routes>
  
        <Route path='/' element={
          <>
           <Login/>
          </>
        } />
        <Route path='/home' element={
          <>
            <MenuBar/>
            <header className="App-header">
              <Pesquisa/>
            </header>
            <hero className="App-hero">
              <Maisbuscados/>
            </hero>
          </>
        } />

        <Route path='/register' element={ <Register/> }/>
        
      </Routes>
        
      
    </div>
  );
}

export default App;

/*
import { Route, Routes } from 'react-router-dom';
import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
//import Maisbuscados from './componentes/Maisbuscados/Maisbuscados';
import MenuBar from './componentes/navbar/Menu';
import Pesquisa from './componentes/pesquisa/Pesquisa';
import Register from './componentes/register/Register';

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
</div>*/