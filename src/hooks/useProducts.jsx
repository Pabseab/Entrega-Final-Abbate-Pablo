import { useState, useEffect } from "react"
import {traerLibros} from "../Services"
import {collection, getDocs, getDoc, doc, getFirestore} from "firebase/firestore";

/**
 * @descriptions Custom Hook for get products
 * @returns {Array} 
 */

export const useGetProducts = (collectionName = "Products") => {
    const [productsData, setProductsData] = useState ([]);

      useEffect (() => {
        const db = getFirestore();

        const dataProducts = collection (db, collectionName);
    
          getDocs(dataProducts).them((snapshot) => {
            setProductsData
            (snapshot.docs.map((doc => ({id: doc.id,...doc.data() })))
        );
      });  
    }, []);

      return {productsData}
};


