import Amazon from "../assets/Amazon.png"

export default function Product({title, price, id, deleteProduct}) {
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img
                src={Amazon}
            />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div>Current Price: {price}</div>
                <div>Optimal Price</div>
                <div className="w-full flex justify-between">
                    <button className="btn btn-primary w-fit">Generate Your Price</button>
                    <button onClick={() => deleteProduct(id)} className="btn btn-primary w-fit">Delete</button>
                </div>
            </div>
        </div>
    )
}