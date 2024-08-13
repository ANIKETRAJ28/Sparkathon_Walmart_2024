import Amazon from "../assets/Amazon.png"

export default function Product() {
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img
                src={Amazon}
            />
            </figure>
            <div className="card-body">
                <h2 className="card-title">I-phone</h2>
                <div>Current Price</div>
                <div>Optimal Price</div>
                <button className="btn btn-primary w-fit">Generate Your Price</button>
            </div>
        </div>
    )
}