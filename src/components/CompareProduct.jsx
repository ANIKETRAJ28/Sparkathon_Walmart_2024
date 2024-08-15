import { useState } from "react"
import Amazon from "../assets/Amazon.png"
import axios from "axios";

export default function Product({title, price, productId, deleteProduct}) {
    const [optimalPrice, setOptimalPrice]= useState(null);
    const [loading, setLoading] = useState(false);

    const handleGeneratePrice = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(`http://localhost:3001/api/v1/product/${productId}/generatePrice`);
            setOptimalPrice(response.data.optimalPrice);
        } catch (error) {
            console.error('Failed to fetch optimal price', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };
    
    return (
        <div className="shadow-xl card bg-base-300 w-96">
            <figure>
                <img
                src={Amazon}
            />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div>Current Price: {price}</div>
                <div>Optimal Price: {optimalPrice ? `${optimalPrice}` : 'Not generated yet'} </div>
                <div className="flex justify-between w-full">
                    <button onClick={handleGeneratePrice} disabled={loading} className="btn btn-primary w-fit">
                        {loading ? 'Loading...' : 'Generate Your Price'}
                    </button>
                    <button onClick={() => deleteProduct(productId)} className="btn btn-primary w-fit">Delete</button>
                </div>
            </div>
        </div>
    )
}