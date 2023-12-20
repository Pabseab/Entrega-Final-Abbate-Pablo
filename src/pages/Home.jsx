
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer.jsx";

import { traerLibros } from "../Services";

import React, { useEffect, useState } from "react";

const Home = ()  => {

    const [libros, setLibros] = useState([]);
    
    useEffect(() => {
        traerLibros().then((response) =>{
            setLibros (response)
        })
    })

    return (
        <ItemListContainer productsData={libros} />
    )
}

export default Home