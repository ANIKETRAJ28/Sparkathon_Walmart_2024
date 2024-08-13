export default function AddProduct() {
    return (
        <dialog id="add-comp" className="modal">
            <div className="modal-box flex flex-col items-center gap-8 pr-12 relative">
            <button onClick={() => document.getElementById("add-comp").close()} className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
                <input type="text" placeholder="Competitor Name" className="input input-bordered w-full" />
                <input type="text" placeholder="Competitor URL" className="input input-bordered w-full" />
                <input type="text" placeholder="Competitor Logo URL" className="input input-bordered w-full" />
                <button onClick={() => document.getElementById("add-comp").close()} className="btn btn-primary self-end">Submit</button>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}