import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import WalmartLogo from "../assets/walmart-logo.png";
import AuthContext from "../context/authContext";

export default function NavBar() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    // console.log('Current user:', user); // Debugging log

    return (
        <div>
            <div className="flex justify-between px-8 navbar bg-base-300">
                <div onClick={() => navigate("/")} className="p-2 rounded-full cursor-pointer hover:bg-base-100">
                    <img className="w-12" src={WalmartLogo} alt="Walmart Logo" />
                </div>
                <div className="flex gap-8">
                    {user ? (
                        <>
                            <div className="cursor-pointer" onClick={() => navigate("/competitors")}>Competitors</div>
                            <div className="cursor-pointer" onClick={() => navigate("/product")}>Product</div>
                            <button onClick={() => { logout(); navigate("/"); }} className="btn btn-info">Logout</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => navigate("/login")} className="btn btn-info">Login</button>
                            <button onClick={() => navigate("/signup")} className="btn btn-info">Signup</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}