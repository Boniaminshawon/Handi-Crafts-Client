import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
// import { Tooltip } from 'react-tooltip';
// import { Tooltip as ReactTooltip } from 'react-tooltip'

const SingleSubCat = ({ singleSubCat }) => {

    const { image, subcategory_Name, origins, key_element, subcategory_title } = singleSubCat;
    return (
        <div>

            <Link to={`/subCategories/${subcategory_Name}`}>
                <div className="flex flex-col md:flex-row border-[#b18b5e] font-p border rounded shadow-xl bg-[#fdf9f5 bg-[#f7ede5] gap-5 p-3 ">
                    <div>
                        <img className="h-full md:w-44 rounded" src={image} alt="" />
                    </div>
                    <div className="border border-[#b18b5e] "></div>
                    <div className="space-y-2 flex-1">
                        <p className="text-xl font-semibold text-[#b18b5e] font-heading1"></p>

                        <p className="text-lg font-bold  font-heading1"><span className="  font-medium mr-2">{subcategory_title}</span> </p>
                        <p className="text-lg  "><span className="  font-medium mr-2">Category:</span>{subcategory_Name} </p>


                        <p className="text-lg  "><span className="  font-medium mr-2">Origin:</span>{origins} </p>

                        <p className="text-lg  "><span className="  font-medium mr-2">Element:</span> {key_element} </p>

                        <div className="w-full border">
                            <button className="w-full py-2 text-white rounded bg-[#b18b5e]">Show More</button>
                        </div>

                        {/* <div className="flex gap-8">
                        <Link to={`/myCraft/${_id}`}><button className="bg-green-600 py-1 px-3 text-white rounded">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="bg-red-600   py-1 px-3 text-white rounded">Delete</button>
                    </div> */}
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default SingleSubCat;