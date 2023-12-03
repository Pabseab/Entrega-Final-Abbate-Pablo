
import ItemListContainer from "./Components/ItemListContainer.jsx";
//Components
import NavBar from "./Components/NavBar/NavBar.jsx";
//Importacion de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Estilos
//import './App.css'

const App = () => {

  return (
      <div style={{width:"100vw", height:"100vh"}}> 
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a mi Tienda de Libros" />
      </div>

  );
}

export default App;
