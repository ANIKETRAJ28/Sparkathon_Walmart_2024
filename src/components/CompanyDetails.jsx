import Amazon from "../assets/Amazon.png"

export default function CompanyDetails() {
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Amazon}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Amazon</h2>
                <div className="card-actions">
                <button className="btn btn-primary">Compete</button>
                </div>
            </div>
        </div>
    )
}