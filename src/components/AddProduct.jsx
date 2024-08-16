import axios from "axios";
import { useEffect, useState } from "react";

export default function AddProduct({AddItem}) {

    const API_URL = 'http://localhost:3001/api/v1';
    const [product, setProduct] = useState({
        name: '',
        productUrlPage: '',
        currentPrice: '',
        inventory: '',
        salesLastMonth: '',
        competitorId: undefined,
        competitors: []
    });

    useEffect(() => {
        if(product.competitors.length > 0) return;
        getCompetitors();
    }, [product.competitors]);

    async function getCompetitors() {
        const response = await axios.get(`${API_URL}/competitors`);
        setProduct({...product, competitors: response.data.data});
    }

    function handleOnChange(e) {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }

    async function onSubmit() {
        await AddItem(product.competitorId, product);
        reset();
    }

    function reset() {
        setProduct({...product,
            name: '',
            productUrlPage: '',
            currentPrice: '',
            inventory: '',
            salesLastMonth: '',
            competitorId: undefined,
        });
        const element = document.getElementById("company");
        element.innerText = "Select Company";
    }

    return (
        <dialog id="add-prod" className="modal">
            <div className="modal-box flex flex-col items-center gap-8 pr-12 relative">
                <button onClick={() => {
                    reset();
                    document.getElementById("add-prod").close();
                }} className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
                <input value={product.name} onChange={handleOnChange} name="name" type="text" placeholder="Product Name" className="input input-bordered w-full" />
                <input value={product.productUrlPage} onChange={handleOnChange} name="productUrlPage" type="text" placeholder="Product URL" className="input input-bordered w-full" />
                <input value={product.currentPrice} onChange={handleOnChange} name="currentPrice" type="price" placeholder="Product Price" className="input input-bordered w-full" />
                <input value={product.inventory} onChange={handleOnChange} name="inventory" type="text" placeholder="Product Inventory" className="input input-bordered w-full" />
                <input value={product.salesLastMonth} onChange={handleOnChange} name="salesLastMonth" type="text" placeholder="Sales" className="input input-bordered w-full" />
                <details id="drop-down" className="dropdown dropdown-right self-start">
                    <summary id="company" className="btn m-1">Select Company</summary>
                    <ul onClick={(e) => {
                        const competitor = e.target.getAttribute('id');
                        const value = e.target.innerText;
                        const element = e.target.parentElement.parentElement.previousSibling;
                        element.innerText = value;
                        setProduct({...product, competitorId: competitor});
                        let open = document.getElementById("drop-down");
                        open.open = !open.open;
                    }} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {
                            product.competitors.length > 0 && product.competitors.map(competitor => <li key={competitor._id}><a id={competitor._id}>{competitor.name}</a></li>)
                        }
                    </ul>
                </details>
                <button onClick={() => {
                    onSubmit();
                    document.getElementById("add-prod").close()
                }} className="btn btn-primary self-end">Submit</button>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={reset}>close</button>
            </form>
        </dialog>
    );
}