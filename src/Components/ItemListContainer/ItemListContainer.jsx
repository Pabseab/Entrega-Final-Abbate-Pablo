
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../Services/Firebase/Firebase';

const ItemListContainer = () => {

const [products, setProducts] = useState([])

const { categoria } = useParams();


useEffect( () => {

    const ref = collection(dataBase, "Products")

    const busqueda = categoria? query(ref, where("Categoria", "==", categoria)): ref 
    getDocs(busqueda)
    .then((resp) => {
        setProducts(resp.docs.map((doc) => ({
            ...doc.data(), id: doc.id 
        })))
        
    })

},[categoria])

    return(

        <div className='container' style={{height: "100vh"}}>
            <div className='row'>
                {products && 
                    products.map((product) => {
                    return(
                            <div className='col-lg-4' key={products.id} style={{display:'flex', justifyContent:'space-around', flexWrap: "wrap", marginTop: "5vh", marginBottom: "5vh"}}>
                                <Card style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", alignItems: "center"}}>
                                    <img style={{width: "150px", height: "225px", marginBottom: "15px"}} src={product.Imagen} alt={product.Titulo} />
                                    <Card.Title>{product.Titulo}</Card.Title>
                                    <p>{product.Categoria}</p>
                                    <p> $ {product.Price}</p>
                                    <Link to={"/item/"+products.id} className="btn btn-primary">Ver Ficha del Producto</Link>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        //<div className='container'>
        //    <div className='row'>
        //        {productsData.map((products) => {
        //                return(
        //                    <div className='col-lg-4' key={products.id} style={{display:'flex', justifyContent:'space-around', flexWrap: "wrap", marginTop: "5vh"}}>
        //                        <Card style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
        //                        <Card.Img variant="top" src={products.imagen} />
        //                            <Card.Body>
        //                                <Card.Title>{products.titulo}</Card.Title>
        //                                <Card.Text>{products.subtitulo}</Card.Text>
        //                                    <div>{products.precio}</div>
        //                                    <Link to={"/item/"+products.id} className="btn btn-primary">Añadir al Carrito</Link>
        //                            </Card.Body>
        //                        </Card>
        //                    </div>
        //                )
        //            })
        //        }
        //    </div>
        //</div>
    )
}

export default ItemListContainer;