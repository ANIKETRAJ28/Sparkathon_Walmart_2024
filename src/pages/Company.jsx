import { IoAdd } from "react-icons/io5";
import CompanyDetails from "../components/CompanyDetails";
import Layout from "../Layout/Layout";
import AddProduct from "../components/AddCompany";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Company() {

    const API_URL = 'http://localhost:3001/api/v1'; 
    const [allCompetitors, setAllCompetitors] = useState([]);
    useEffect(() => {
        getCompetitors()
    }, [allCompetitors]);

    async function getCompetitors() {
        const response = await axios.get(`${API_URL}/competitors`);
        if(response.data.data.length == allCompetitors.length) return;
        setAllCompetitors(response.data.data);
    }

    async function addCompetitor(data) {
        const response = await axios.post(`${API_URL}/competitors/add`, data);
        setAllCompetitors([...allCompetitors, response.data.data]);
    }

    async function deleteCompetitor(id) {
        await axios.delete(`${API_URL}/competitors/${id}`);
        setAllCompetitors(allCompetitors.filter(competitor => competitor._id != id));
    }

    return (
        <Layout>
            <div className="flex flex-wrap justify-around gap-4 m-4">
                <div onClick={() => document.getElementById('add-comp').showModal()} className="flex items-center justify-center shadow-xl cursor-pointer card bg-base-200 w-96">
                    <div className="text-6xl">
                        <IoAdd/>
                    </div>
                    <div>Add More</div>
                </div>
                {
                    allCompetitors &&
                    allCompetitors.map(competitor => <CompanyDetails key={competitor._id} id={competitor._id} title={competitor.name} deleteCompetitor={deleteCompetitor}/>)
                }
            </div>
            <AddProduct addCompetitor={addCompetitor}/>
        </Layout>
    );
}