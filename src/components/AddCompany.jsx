import { useState } from "react";

export default function AddProduct({addCompetitor}) {

    const [competitor, setCompetitor] = useState({
        name: '',
        url: ''
    });

    function handleSetCompetitor(e) {
        const name = e.target.name;
        const value = e.target.value;
        setCompetitor({...competitor, [name]: value});
    }

    return (
        <dialog id="add-comp" className="modal">
            <div className="modal-box flex flex-col items-center gap-8 pr-12 relative">
            <button onClick={() => document.getElementById("add-comp").close()} className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
                <input name="name" type="text" placeholder="Competitor Name" className="input input-bordered w-full" onChange={handleSetCompetitor}/>
                <input name="url" type="text" placeholder="Competitor URL" className="input input-bordered w-full" onChange={handleSetCompetitor} />
                <button onClick={() => {
                    document.getElementById("add-comp").close();
                    if(competitor.name && competitor.url) addCompetitor(competitor);
                }} className="btn btn-primary self-end">Submit</button>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}