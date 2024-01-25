
//Components
import NavBar from "./Components/NavBar/NavBar.jsx";
//Importacion de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import MainRouter from "./router/MainRouter";

import { CartProvider } from "./Context/CartContext";

//import "./App.css";

//import {Data} from "./json/productsData.js"

const App = () => {

  return (
      <div> 
        <CartProvider>
          <MainRouter />
        </CartProvider>
      </div>
  );
}

export default App;
