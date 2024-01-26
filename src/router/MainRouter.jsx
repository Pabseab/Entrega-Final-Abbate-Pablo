import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavBar  from "../Components/NavBar/NavBar";
import  Home  from "../pages/Home";
//import Category from "../pages/Category";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
//import Cart from "../pages/Cart";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";

const MainRouter = ()  => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoria" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter