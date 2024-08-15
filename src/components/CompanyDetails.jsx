import Amazon from "../assets/Amazon.png"

export default function CompanyDetails({title, id, deleteCompetitor}) {
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Amazon}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions">
                <button onClick={() => deleteCompetitor(id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
}