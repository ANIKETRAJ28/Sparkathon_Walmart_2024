import Walmart from "../assets/walmart-logo-transparent.png";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";

export default function Home() {

    const navigate = useNavigate();

    return (
        <Layout>
            <div className="flex flex-col items-center gap-8">
                <img className="w-[70vw]" src={Walmart}/>
                <div className="text-5xl">Available for your Service</div>
                <button onClick={() => navigate("/competitors")} className="btn btn-info">Sign In with Google</button>
            </div>
        </Layout>
    );
}