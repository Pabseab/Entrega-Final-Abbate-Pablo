import { useContext } from "react";
import { CartContext } from "../../Context/CartContext.jsx";


const CartWidget = () => {
    const { count } = useContext(CartContext);

    const totalQuantity = count.reduce((total,item) => total + item.quantity,0); 

    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <div>Carrito</div>
            <span className="contadorcarrito" style={{fontWeight:"bold", fontSize: "1.1rem", marginLeft: "15px", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            {totalQuantity} Unidades
            </span>
        </div>
    );
};

export default CartWidget;