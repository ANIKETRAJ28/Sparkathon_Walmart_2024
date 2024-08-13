import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Company from "../pages/Company";
import Product from "../pages/Product";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/competitors" element={<Company/>}/>
            <Route path="/product" element={<Product/>}/>
        </Routes>  
    );
}