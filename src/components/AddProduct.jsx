export default function AddProduct() {
    return (
        <dialog id="add-prod" className="modal">
            <div className="modal-box flex flex-col items-center gap-8 pr-12 relative">
                <button onClick={() => document.getElementById("add-prod").close()} className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
                <input type="text" placeholder="Competitor Name" className="input input-bordered w-full" />
                <input type="text" placeholder="Competitor URL" className="input input-bordered w-full" />
                <input type="text" placeholder="Competitor Logo URL" className="input input-bordered w-full" />
                <details id="drop-down" className="dropdown dropdown-right self-start">
                    <summary className="btn m-1">Select Company</summary>
                    <ul onClick={() => {
                        let open = document.getElementById("drop-down");
                        open.open = !open.open;
                    }} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
                <button onClick={() => document.getElementById("add-prod").close()} className="btn btn-primary self-end">Submit</button>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}