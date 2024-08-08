import { IoAdd } from "react-icons/io5";
import Company from "../components/Company";
import Layout from "../Layout/Layout";
import AddProduct from "../components/AddProduct";

export default function Competitors() {
    return (
        <Layout>
            <div className="flex m-4 flex-wrap justify-around gap-4">
                <div onClick={() => document.getElementById('add-prod').showModal()} className="card bg-base-200 w-96 shadow-xl flex justify-center items-center cursor-pointer">
                    <div className="text-6xl">
                        <IoAdd/>
                    </div>
                    <div>Add More</div>
                </div>
                <Company/>
                <Company/>
            </div>
            <AddProduct/>
        </Layout>
    );
}