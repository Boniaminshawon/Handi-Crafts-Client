import { Link } from "react-router-dom";


const SelectedCraftSec = ({ singleSelectedCraft }) => {
    const { _id, item, image,stock, rating, price, processing, description, category } = singleSelectedCraft;
    return (
        <div>
            <div className="flex flex-col font-heading1  p-6  overflow-hidden rounded-lg shadow-md bg-[#faf7f2]">

                <div>
                    <h2 className="xl:mb-3 text-lg lg:h-[56px] xl:h-auto font-p  font-semibold">Category: {category}</h2>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-64 " />
                    <h2 className="xl:mb-1 lg:h-[56px] xl:h-auto text-xl font-semibold">{item}</h2>
                    
                    <div className="flex font-p my-3 font-medium  justify-between">
                        <p>price: {price}</p>
                     
                    </div>
                    <div className="flex font-p my-3 font-medium  justify-between">
                        <p>Processing Time: {processing}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="border border-[#b18b5e] mb-2"></div>
                    <p className="font-p"><span className="font-medium text-lg">Description:</span> {description.slice(0,150)}...</p>
                    <div className="mt-5 text-white">
                        <Link to={`/${_id}`}><button className="w-full bg-[#b18b5e] py-2 rounded font-semibold text-xl">View Details</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SelectedCraftSec;