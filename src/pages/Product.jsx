import { IoAdd } from "react-icons/io5";
import CompareProduct from "../components/CompareProduct";
import AddProduct from "../components/AddProduct";

export default function Product() {
    return (
        <div className="flex m-4 flex-wrap justify-around gap-4">
            <div onClick={() => document.getElementById('add-prod').showModal()} className="card bg-base-200 w-96 shadow-xl flex justify-center items-center cursor-pointer">
                    <div className="text-6xl">
                        <IoAdd/>
                    </div>
                    <div>Add More</div>
                </div>
            <CompareProduct/>
            <CompareProduct/>
            <AddProduct/>
        </div>
    );
}