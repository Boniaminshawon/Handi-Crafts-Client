import { Link, useLoaderData } from "react-router-dom";


const AllCrafts = () => {
    const allCrafts = useLoaderData();
    return (
        <div className="my-10">
            <h1 className="text-4xl font-bold text-center bg-[#faf7f2]  py-5 rounded font-heading mb-10"> All Art & Craft Items</h1>

            <div className="overflow-x-auto font-p">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold text-xl text-[#b18b5e]">
                            <th></th>
                            <th >Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    {
                        allCrafts.map((craft, index) => <tbody key={craft._id}>

                            <tr className=" text-lg bg-[#fdf9f5] ">
                                <th>{index + 1}</th>
                                <td className="font-bold font-heading1">{craft.item}</td>
                                <td>{craft.category}</td>
                                <td>{craft.price}</td>
                                <td>{craft.stock}</td>
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