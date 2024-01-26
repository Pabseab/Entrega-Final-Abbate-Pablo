//import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
//import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
//import { useGetProducts } from "../hooks/useProducts"
//
//
//export const Cart = () => {
//
//    const { productsData } = useGetProducts("Products");
//  
//
//return(
//
//    <div className='container' style={{height: "100vh"}} >
//        <div className='row' >
//            {products && 
//                products.map((product) => {
//                return(
//                        <div className='col-lg-4' key={products.id} style={{display:'flex', justifyContent:'space-around', flexWrap: "wrap", marginTop: "5vh", marginBottom: "5vh"}}>
//                            <Card style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", alignItems: "center"}}>
//                                <img style={{width: "150px", height: "225px", marginBottom: "15px"}} src={product.Imagen} alt={product.Titulo} />
//                                <Card.Title>{product.Titulo}</Card.Title>
//                                <p>{product.Categoria}</p>
//                                <p> $ {product.Price}</p>
//                                <Link to={"/item/"+products.id} className="btn btn-primary">Ver Ficha del Producto</Link>
//                            </Card>
//                        </div>
//                    )
//                })
//            }
//        </div>
//    </div>
//    )
//};
//
//export default Cart