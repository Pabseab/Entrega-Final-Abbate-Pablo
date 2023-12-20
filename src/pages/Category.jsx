
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { traerLibros } from "../Services";

export const Category = () => {
    const categoria = useParams().categoria;
    const [libros, setLibros] = useState([]);
    
    useEffect(() => {
        traerLibros()
        .then((response) =>{
            setLibros (response.filter((prod) => prod.categoria === categoria));
        })
    },[categoria])

    return (
        <ItemListContainer productsData={libros} />
    );
}

export default Category