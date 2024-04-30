
import UseAuth from "../Components/Hooks/UseAuth";
import { useEffect, useState } from "react";
import SingleCraft from "../Components/SingleCraft";
import Loader from "../Components/Loader";
import { IoMdArrowDropdown } from "react-icons/io";

const MyCraft = () => {

    const [myCraft, setMyCraft] = useState([]);
    const [displayMyCart, setDisplayMyCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = UseAuth() || {};


    useEffect(() => {
        setLoading(true);
        fetch(`https://handi-crafts-server.vercel.app/myCraftItem/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setMyCraft(data);
                setDisplayMyCart(data);
                setLoading(false)

            })

    }, [user]);


    const handleFilter = (filter) => {
        if (filter === 'all') {
            setDisplayMyCart(myCraft);
        }
        else if (filter === 'Yes') {
            const yes = myCraft.filter(craft => craft.customize === 'Yes');
            setDisplayMyCart(yes);
        }
        else if (filter === 'No') {
            const no = myCraft.filter(craft => craft.customize === 'No');
            setDisplayMyCart(no);
        }
    }

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className="md:my-10 my-6">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center bg-[#faf7f2]  md:py-5 py-3 rounded font-heading mb-5">My Art & Craft Items : {displayMyCart.length}</h1>

            <div className="dropdown dropdown-bottom dropdown-hover text-center  flex justify-center">
                <div tabIndex={0} role="button" className="btn z-[1] m-1 text-2xl font-medium font-p text-white hover:bg-[#b18b5e] bg-[#b18b5e]">Sort By <span><IoMdArrowDropdown></IoMdArrowDropdown></span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 font-medium text-lg">

                    <li onClick={() => handleFilter('all')} className="border-b border-[#b18b5e]"><a> All</a></li>
                    <li onClick={() => handleFilter('Yes')} className="border-b border-[#b18b5e]"><a> Yes</a></li>
                    <li onClick={() => handleFilter('No')} className=""><a>No</a></li>


                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
                {
                    displayMyCart.map(singleCraft => <SingleCraft displayMyCart={displayMyCart} setDisplayMyCart={setDisplayMyCart} key={singleCraft._id} singleCraft={singleCraft}></SingleCraft>)
                }
            </div>
        </div>
    );
};

export default MyCraft;