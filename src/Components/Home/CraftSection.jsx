import { Link } from "react-router-dom";


const CraftSection = ({ craft }) => {
    const { _id,item, image, stock, category,price } = craft;


    return (
        <div>
            <div className="flex flex-col font-heading1  p-6  overflow-hidden rounded-lg shadow-md bg-[#faf7f2]">

                <div>
                    <h2 className="xl:mb-3 text-lg lg:h-[56px] xl:h-auto font-p  font-semibold">Category: {category}</h2>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-64 " />
                    <h2 className="xl:mb-1 lg:h-[56px] xl:h-auto text-xl font-semibold">{item}</h2>
                    <div className="flex font-p my-4 font-medium  justify-between">
                        <p>price: {price}</p>
                        <p>{stock}</p>
                    </div>
                    <div className="mt-5 text-white">
                        <Link to={`/${_id}`}><button className="w-full bg-[#b18b5e] py-2 rounded font-semibold text-xl">View Details</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CraftSection;