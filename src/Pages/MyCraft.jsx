
import UseAuth from "../Components/Hooks/UseAuth";
import { useEffect, useState } from "react";
import SingleCraft from "../Components/SingleCraft";
import Loader from "../Components/Loader";
import { useLoaderData } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const MyCraft = () => {

    const allCrafts = useLoaderData();
    const [crafts, setCrafts] = useState(allCrafts);


    const [myCraft, setMyCraft] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = UseAuth() || {};

    if (loading) {
        <Loader></Loader>
    }
    useEffect(() => {

        fetch(`https://handi-crafts-server.vercel.app/myCraftItem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoading(true);
                setMyCraft(data);

            })

    }, [user])


    return (
        <div className="my-10">
            <h1 className="text-4xl font-bold text-center bg-[#faf7f2]  py-5 rounded font-heading mb-5">My added Art & Craft Items : {myCraft.length}</h1>

            <div className="dropdown dropdown-bottom dropdown-hover text-center  flex justify-center">
                <div tabIndex={0} role="button" className="btn z-[1] m-1 text-2xl font-medium font-p text-white hover:bg-[#b18b5e] bg-[#b18b5e]">Sort By <span><IoMdArrowDropdown></IoMdArrowDropdown></span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 font-medium text-lg">
                    <li className="border-b border-[#b18b5e]"><a> Yes</a></li>
                    <li className=""><a>No</a></li>
                   
                    
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    myCraft.map(singleCraft => <SingleCraft crafts={crafts} setCrafts={setCrafts} key={singleCraft._id} singleCraft={singleCraft}></SingleCraft>)
                }
            </div>
        </div>
    );
};

export default MyCraft;