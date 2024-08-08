import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Competitors from "../pages/Competitors";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/competitors" element={<Competitors/>}/>
        </Routes>  
    );
}