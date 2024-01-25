
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainer = ({productsData}) => {

    return(
        <div className='container'>
            <div className='row'>
                {
                    productsData.map(products => {
                        return(
                            <div className='col-lg-4' key={products.id} style={{display:'flex', justifyContent:'space-around', flexWrap: "wrap", marginTop: "5vh"}}>
                                <Card style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                                <Card.Img variant="top" src={products.imagen} />
                                    <Card.Body>
                                        <Card.Title>{products.titulo}</Card.Title>
                                        <Card.Text>{products.subtitulo}</Card.Text>
                                            <div>{products.precio}</div>
                                            <Link to={"/item/"+products.id} className="btn btn-primary">Añadir al Carrito</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemListContainer;