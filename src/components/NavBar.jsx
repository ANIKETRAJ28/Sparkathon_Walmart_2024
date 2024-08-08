import { useNavigate } from "react-router-dom";

import WalmartLogo from "../assets/walmart-logo.png";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="navbar bg-base-300 flex justify-between px-8">
                <div onClick={() => navigate("/")} className="rounded-full hover:bg-base-100 p-2 cursor-pointer">
                    <img className="w-12" src={WalmartLogo} alt="" />
                </div>
                <button className="btn btn-info">Sign In</button>
            </div>
        </div>
    );
}