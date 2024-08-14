import Walmart from "../assets/walmart-logo-transparent.png";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useContext } from "react";
import AuthContext from "../context/authContext";


export default function Home() {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="flex flex-col items-center gap-8">
                <img className="w-[70vw]" src={Walmart}/>
                <div className="text-5xl">Available for your Service</div>
            </div>
        </Layout>
    );
}