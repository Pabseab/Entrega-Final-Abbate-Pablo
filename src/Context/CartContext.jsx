
import { createContext, useState } from "react";



//1ero Crear el contexto
export const CartContext = createContext();

const carritoinicial = JSON.parse(localStorage.getItem("carrito"))||[];

//2do Crear el provider
export const CartProvider = ({children}) => {
  const [count, setCount] = useState([]);
  
  const [ carrito, setCarrito ] = useState(carritoinicial)
  
  const agregarAlCarrito = (libro, countItem, setCountItem) => {
    const libroAgregado = { ...libro, countItem };
    const nuevoCarrito = [...carrito]
    const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === libroAgregado.id)
    if (estaEnElCarrito) {
        estaEnElCarrito.countItem += countItem;

    } else { nuevoCarrito.push(libroAgregado) }
    setCarrito(nuevoCarrito)
    setCountItem(1)
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.countItem, 0);
  } 

  //3ero Creacion del proveedor y pasaje de valores (value)
  return (
    <CartContext.Provider value={{ agregarAlCarrito, cantidadEnCarrito }}>
      { children }
    </CartContext.Provider>
  );
};