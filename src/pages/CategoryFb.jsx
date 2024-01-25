import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useGetProducts } from "../hooks/useProducts";


export const CategoryFb = () => {
    //const {id} = useParams();

    const { productsData } = useGetProducts("Products");
  
    return (<ItemListContainer productsData={productsData} />);
  };

export default CategoryFb