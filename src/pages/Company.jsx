import { IoAdd } from "react-icons/io5";
import CompanyDetails from "../components/CompanyDetails";
import Layout from "../Layout/Layout";
import AddProduct from "../components/AddCompany";

export default function Company() {
    return (
        <Layout>
            <div className="flex m-4 flex-wrap justify-around gap-4">
                <div onClick={() => document.getElementById('add-comp').showModal()} className="card bg-base-200 w-96 shadow-xl flex justify-center items-center cursor-pointer">
                    <div className="text-6xl">
                        <IoAdd/>
                    </div>
                    <div>Add More</div>
                </div>
                <CompanyDetails/>
                <CompanyDetails/>
            </div>
            <AddProduct/>
        </Layout>
    );
}