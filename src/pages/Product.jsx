import { IoAdd } from "react-icons/io5";
import CompareProduct from "../components/CompareProduct";
import AddProduct from "../components/AddProduct";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {

    const API_URL = 'http://localhost:3001/api/v1';
    const [product, setProduct] = useState([]);

    async function getProduct() {
        const response = await axios.get(`${API_URL}/products`);
        if(response.data.data.length == product.length) return;
        setProduct(response.data.data);
    }

    async function AddItem(competitorId, data) {
        const response = await axios.post(`${API_URL}/products/add/${competitorId}`, data);
        setProduct([...product, response.data.data]);
    }

    async function deleteProduct(id) {
        await axios.delete(`${API_URL}/product/${id}`);
        setProduct(product.filter(item => item._id != id));
    }

    useEffect(() => {
        getProduct();
    }, [product])

    return (
        <Layout>
            <div className="flex flex-wrap justify-around gap-4 m-4">
                <div onClick={() => document.getElementById('add-prod').showModal()} className="flex items-center justify-center shadow-xl cursor-pointer card bg-base-200 w-96">
                        <div className="text-6xl">
                            <IoAdd/>
                        </div>
                        <div>Add More</div>
                    </div>
                {
                    product.length > 0 && product.map(item => <CompareProduct key={product._id} title={item.name} price={item.currentPrice} productId={item._id} deleteProduct={deleteProduct}/>)
                }
            </div>
            <AddProduct AddItem={AddItem}/>
        </Layout>
    );
}