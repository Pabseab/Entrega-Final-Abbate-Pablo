import { useState, useEffect } from "react"
import {traerLibros} from "../Services"
import {collection, getDocs, getDoc, doc, getFirestore} from "firebase/firestore";

/**
 * @descriptions Custom Hook for get products
 * @returns {Array} 
 */


export const useGetProducts = (products) => {
    const [productsData, setProductsData] = useState ([]);

    useEffect (() => {
      const db = getFirestore();

      const productsCollection = collection (db, products);
    
      getDoc(productsCollection).them((snapshot) => {
        setProductsData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
        );
      });  
    }, []);

      return {productsData}

}
//export const useGetProductById = (collectionName = "Products", id) => {
//  const [productData, setProductData] = useState([]);
//
//  useEffect(() => {
//    const db = getFirestore();
//
//    const docRef = doc(db, collectionName, id)
//
//    getDoc(docRef).then((doc) => {
//      setProductData({ id: doc.id, ...doc.data() })
//    })
//
//  }, [id]);
//
//  return { productData };
//};

