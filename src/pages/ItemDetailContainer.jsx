import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import { traerLibroPorId } from "../Services";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CountComponent from '../Components/CountComponent/CountComponent';

export const ItemDetailContainer = () => {
  const id = useParams().id;
  const [libro, setLibro] = useState([]);
    
  useEffect(() => {
    traerLibroPorId(Number(id)).then((response) =>{
      setLibro(response)
    })
  }, [id])

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 100}}>
      <Card key={libro.id} style={{ width: '20rem', display:'flex', justifyContent: "center", alignItems: "center"}}>
        <Card.Img variant="top" src={libro.imagen} style={{width: "15rem"}} />
        <Card.Body>
            <Card.Title>{libro.titulo}</Card.Title>
                <Card.Text>
                    {libro.subtitulo}
                </Card.Text>
                <div> $ {libro.precio}</div>
            <Link to={"/item/"+libro.id} className="btn btn-primary" style={{marginTop: "10px"}}>Go somewhere</Link>
            <CountComponent />
        </Card.Body>
      </Card>
    </div>
  )
}


export default ItemDetailContainer