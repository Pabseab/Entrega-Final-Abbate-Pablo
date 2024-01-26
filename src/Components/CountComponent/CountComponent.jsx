
import { useContext,useState, useEffect } from "react";
import {Button} from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

const CountComponent = ({handleAgregar, handleAdd, handleRemove, countItem}) => {
   
    return (
      <div>
        <div className="btncont" style={{display: "flex", justifyContent: "space-around", marginTop: "10px"}}>
          <button style={{border: "white", fontSize: "20px", backgroundColor: "white"}} onClick={handleAdd}>+</button>
          <div>{countItem}</div>
          <button style={{border: "white", fontSize: "20px", backgroundColor: "white"}} onClick={handleRemove}>-</button>
        </div>
        <Button onClick={handleAgregar} style={{marginTop: "15px"}}>Agregar al Carrito</Button>
      </div>
    );

  };

  

export default CountComponent;