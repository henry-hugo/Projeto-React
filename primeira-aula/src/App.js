

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//     </div>
//   );
// }

import AppBar from "./Components/Aplicar/Aplicar";
import AppBanner from "./Components/banner/banner";
import AppMain from "./Components/main/main";

const App = () => {
  return(
    <>
    <AppBar/>
    <AppBanner/>
    <AppMain/>
    </>
  )
 
}

export default App;
