import { useEffect, useState } from "react"
import Amazon from "../assets/Amazon.png"
import axios from "axios";

export default function Product({competitorId, title, price, productId, deleteProduct}) {
    const [optimalPrice, setOptimalPrice]= useState(null);
    const [loading, setLoading] = useState(false);
    const [competitorName, setCompetitorName] = useState(null)

    useEffect(() => {
        getCompetitor();
    }, [])

    const getCompetitor = async () => {
        const API_URL = 'http://localhost:3001/api/v1';
        const response = await axios.get(`${API_URL}/competitors`);
        const competitorData = response.data.data.filter(competitor => competitor._id == competitorId);
        setCompetitorName(competitorData[0].name);
    }

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
                <button className="btn cursor-default">Current Price: {price}</button>
                <button className="btn cursor-default font-bold">Optimal Price: {optimalPrice ? `${optimalPrice}` : 'Not generated yet'} </button>
                {competitorName && <button className="btn btn-warning cursor-default font-bold">Competing with: {competitorName}</button>}
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