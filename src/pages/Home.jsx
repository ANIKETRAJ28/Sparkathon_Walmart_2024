import Walmart from "../assets/walmart-logo-transparent.png";
import Layout from "../Layout/Layout";

export default function Home() {

    return (
        <Layout>
            <div className="flex flex-col items-center gap-8">
                <img className="w-[70vw]" src={Walmart}/>
                <div className="text-5xl">Available for your Service</div>
            </div>
        </Layout>
    );
}