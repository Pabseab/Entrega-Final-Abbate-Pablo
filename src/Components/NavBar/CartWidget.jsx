import { useContext } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import { Link } from "react-router-dom";


const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);

    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <div> Carrito </div>
            <span className="contadorcarrito" style={{fontWeight:"bold", fontSize: "1.1rem", marginLeft: "15px", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            {cantidadEnCarrito()} Unidades
            </span>
        </div>
    );
};

export default CartWidget;