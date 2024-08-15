import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Company from "../pages/Company";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/competitors" element={<Company/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>  
    );
}