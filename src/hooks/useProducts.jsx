import { useState, useEffect } from "react"

import {traerLibros} from "../Services"

/**
 * @descriptions Custom Hook for get products
 * @returns {Array} 
 */


export const useGetProducts = () => {

    const [productsData, setProductsData] = useState ([])

    useEffect(() => {
        traerLibros(9)
        .them(response =>{
          setProductsData(response.data.products)
        })
          .catch(error => {
            console.log(error);
          })
      }, [])

      return {productsData}

}