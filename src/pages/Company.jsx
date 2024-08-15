import { IoAdd } from "react-icons/io5";
import CompanyDetails from "../components/CompanyDetails";
import Layout from "../Layout/Layout";
import AddProduct from "../components/AddCompany";

export default function Company() {
    return (
        <Layout>
            <div className="flex flex-wrap justify-around gap-4 m-4">
                <div onClick={() => document.getElementById('add-comp').showModal()} className="flex items-center justify-center shadow-xl cursor-pointer card bg-base-200 w-96">
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