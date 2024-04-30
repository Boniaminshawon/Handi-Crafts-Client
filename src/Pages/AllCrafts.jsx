import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Loader from "../Components/Loader";


const AllCrafts = () => {
    // const allCrafts = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [allCrafts, setAllCrafts] = useState([])


    useEffect(() => {
        setLoading(true);
        fetch('https://handi-crafts-server.vercel.app/craftItem')
            .then(res => res.json())
            .then(data => {
                
                setAllCrafts(data);
                setLoading(false)

            })

    }, []);
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className="md:my-10 my-6">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center bg-[#faf7f2] md:py-5 py-3 rounded font-heading mb-5 md:mb-10"> All Art & Craft Items</h1>

            <div className="overflow-x-auto font-p">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold text-sm md:text-xl text-[#b18b5e]">
                            <th></th>
                            <th >Item Name</th>
                            <th className="md:flex hidden">Category</th>
                            <th>Price</th>
                            <th className="md:flex hidden">Stock Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    {
                        allCrafts.map((craft, index) => <tbody key={craft._id}>

                            <tr className=" text-xs md:text-lg bg-[#fdf9f5] ">
                                <th>{index + 1}</th>
                                <td className="font-bold font-heading1">{craft.item}</td>
                                <td className="md:flex hidden">{craft.category}</td>
                                <td>{craft.price}</td>
                                <td className="md:flex hidden">{craft.stock}</td>
                                <th>
                                    <Link to={`/${craft._id}`}><button className=" bg-[#b18b5e] py-1 px-2 text-white rounded font-medium ">Details</button></Link>
                                </th>
                            </tr>
                        </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default AllCrafts;