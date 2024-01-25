
import { useContext,useState, useEffect } from "react";
import {Button} from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

const CountComponent = ({productId}) => {
  const [countItem, setCountItem] = useState(1);

  const {count, setCount} = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };
  const handleRemove = () => {
    setCountItem(countItem - 1);
  };

  const handleAddProductToCart = () => {
    const productExist = count.find((item) => item.id === productId);

    if (productExist) {
      setCount(
        count.map((item) =>
        item.id === productId
        ?{...item,quantity: item.quantity + countItem}
        :item
      )
    );
    } else {
    setCount([...count, { id: productId, quantity: countItem}]);
    }
  
  };

  return (
    <div>
      <div className="btncont" style={{display: "flex", justifyContent: "space-around", marginTop: "10px"}}>
        <button onClick={handleAdd}>+</button>
        <div>{countItem}</div>
        <button onClick={handleRemove}>-</button>
      </div>
      <Button onClick={handleAddProductToCart} style={{marginTop: "10px"}}>Agregar al Carrito</Button>
    </div>
  );
};

export default CountComponent;