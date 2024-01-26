import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import { traerLibroPorId } from "../Services";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CountComponent from '../Components/CountComponent/CountComponent';
import { dataBase } from '../Services/Firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../Context/CartContext';

export const ItemDetailContainer = () => {
  const id = useParams().id;
  const [libro, setLibro] = useState([]);
  const {agregarAlCarrito, carrito} = useContext(CartContext)
  
  const [countItem, setCountItem] = useState(1);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };
  const handleRemove = () => {
    countItem >1 && setCountItem(countItem - 1);
  };

  useEffect(() => {
    const docRef= doc(dataBase,"Products", id)
    getDoc(docRef)
    .then((resp)=>{
      setLibro({...resp.data(),id: resp.id})
    })

  }, [id])

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 100}}>
      <Card key={libro.id} style={{ width: '20rem', display:'flex', justifyContent: "center", alignItems: "center"}}>
        <Card.Img variant="top" src={libro.Imagen} style={{width: "15 rem"}} />
        <Card.Body>
            <Card.Title>{libro.Titulo}</Card.Title>
            <div> $ {libro.Price} </div>
            <CountComponent 
            handleAgregar = {(() => {agregarAlCarrito(libro, countItem, setCountItem)})}  
            handleAdd = {handleAdd}
            handleRemove = {handleRemove}
            countItem = {countItem}
            />
            <Link style={{marginTop: "15px"}} to={"/"} className="btn btn-primary">Volver</Link> 
        </Card.Body>
      </Card>
    </div>
  )
}


export default ItemDetailContainer