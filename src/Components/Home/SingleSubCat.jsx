import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const SingleSubCat = ({ singleSubCat }) => {

    const { image, subcategory_Name, origins, key_element, subcategory_title } = singleSubCat;
    return (
        <div
      
        >

            <Link to={`/subCategories/${subcategory_Name}`}>
                <div
                  data-tooltip-id="my-tooltip" data-tooltip-content={subcategory_title}
                className="flex flex-col md:flex-row border-[#b18b5e] font-p border rounded shadow-xl bg-[#fdf9f5 bg-[#f7ede5] gap-4 md:gap-2 lg:gap-5 p-3 ">
                    <div>
                        <img className="md:h-full h-[240px] w-full md:w-44 rounded" src={image} alt="" />
                    </div>
                    <div className="border border-[#b18b5e] "></div>
                    <div className="space-y-2 flex-1">
                        <p className="text-xl font-semibold text-[#b18b5e] font-heading1"></p>

                        <p className="text-lg font-bold lg:h-[56px] xl:h-auto md:h-[84px] font-heading1"><span className="  font-medium mr-2">{subcategory_title}</span> </p>
                        <p className="text-lg  lg:h-[56px] xl:h-auto md:h-[84px]"><span className="  font-medium mr-2">Category:</span>{subcategory_Name} </p>


                        <p className="md:text-lg text-base md:h-[84px] xl:h-auto "><span className="  font-medium mr-2">Origin:</span>{origins} </p>

                        <p className="md:text-lg text-base md:h-[84px] lg:h-[56px] xl:h-auto"><span className="  font-medium mr-2">Element:</span> {key_element} </p>

                        <div className="w-full border">
                            <button className="w-full py-2 text-white rounded bg-[#b18b5e]">Show More</button>
                        </div>
                    </div>
                </div>
                <Tooltip id="my-tooltip" />
            </Link>

        </div>
    );
};

export default SingleSubCat;