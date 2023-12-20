
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainer = ({productsData}) => {

    return(
        <div>
            {
                productsData.map(products => {
                    return(
                        <div style={{display:'flex', flexDirection: "row", justifyContent:'space-around', flexWrap: "wrap"}}>
                        <Card key={products.id} style={{ width: '1rem', display: "flex", justifyContent: "space-around", width:"25vh", flexWrap: "wrap" }}>
                        <Card.Img variant="top" src={products.imagen} />
                        <Card.Body>
                            <Card.Title>{products.titulo}</Card.Title>
                                <Card.Text>
                                    {products.subtitulo}
                                </Card.Text>
                                <div>{products.precio}</div>
                                <Link to={"/item/"+products.id} className="btn btn-primary">Go somewhere</Link>
                        </Card.Body>
                        </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemListContainer;