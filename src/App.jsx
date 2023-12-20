
//Components
import NavBar from "./Components/NavBar/NavBar.jsx";
//Importacion de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import MainRouter from "./router/MainRouter";

//import {Data} from "./json/productsData.js"

const App = () => {

  return (
      <div style={{width:"100vw", height:"100vh"}}> 
        <MainRouter />
      </div>
  );
}

export default App;
