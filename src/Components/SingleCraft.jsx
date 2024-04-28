import { Link } from "react-router-dom";


const SingleCraft = ({ singleCraft }) => {
    const { _id, item, image, stock, rating, price, processing, customize } = singleCraft;
    return (
        <div className="flex border-[#b18b5e] font-p border rounded shadow-xl bg-[#fdf9f5] gap-5 p-4 ">
            <div>
                <img className="h-full w-56 rounded" src={image} alt="" />
            </div>
            <div className="border border-[#b18b5e] "></div>
            <div className="space-y-2">
                <p className="text-xl font-semibold text-[#b18b5e] font-heading1">{item}</p>
            
                    <p className="text-lg  "><span className="  font-medium mr-2">Price:</span> {price}</p>
                    <p className="text-lg  "><span className="  font-medium mr-2">Stock Status:</span> {stock}</p>
          

                <p className="text-lg  "><span className="  font-medium mr-2">Processing:</span> {processing}</p>

                <p className="text-lg  "><span className="  font-medium mr-2">Customization:</span> {customize}</p>

                <div className="flex gap-8">
                    <Link><button className="bg-green-400 py-1 px-3 text-white rounded">Update</button></Link>
                    <Link><button className="bg-red-500   py-1 px-3 text-white rounded">Delete</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCraft;