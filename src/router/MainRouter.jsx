import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavBar  from "../Components/NavBar/NavBar";
import  Home  from "../pages/Home";
import Category from "../pages/Category";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import Novedades from "../pages/Novedades"

const MainRouter = ()  => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoria" element={<Category />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/Novedades" element={<Novedades />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter