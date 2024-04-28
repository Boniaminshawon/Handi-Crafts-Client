
import UseAuth from "../Components/Hooks/UseAuth";
import { useEffect, useState } from "react";
import SingleCraft from "../Components/SingleCraft";
import Loader from "../Components/Loader";


const MyCraft = () => {

    const [myCraft, setMyCraft] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = UseAuth() || {};

    if (loading) {
        <Loader></Loader>
    }
    useEffect(() => {
        
        fetch(`http://localhost:5000/myCraftItem/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoading(true);
                setMyCraft(data);

            })

    }, [user])


    console.log(myCraft)



    return (
        <div className="my-10">
            <h1 className="text-4xl font-bold text-center bg-[#faf7f2]  py-5 rounded font-heading mb-10">My added Art & Craft Items : {myCraft.length}</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    myCraft.map(singleCraft => <SingleCraft key={singleCraft._id} singleCraft={singleCraft}></SingleCraft>)
                }
            </div>
        </div>
    );
};

export default MyCraft;