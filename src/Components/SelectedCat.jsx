import { Link, useLoaderData } from "react-router-dom";
import SelectedCraftSec from "./SelectedCraftSec";


const SelectedCat = () => {
    const selectedCraft = useLoaderData();
    //  = selectedCraft;
    console.log(selectedCraft);
    return (
        <div className="md:my-10 my-5">
            <h1 className="lg:text-4xl md:text-3xl text-3xl font-bold text-center bg-[#faf7f2]  py-5 rounded font-heading mb-7 ">Your Selected Category is: {selectedCraft[0].category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    selectedCraft.map(singleSelectedCraft => <SelectedCraftSec key={singleSelectedCraft._id} singleSelectedCraft={singleSelectedCraft}></SelectedCraftSec>)
                }
            </div>

        </div>
    );
};

export default SelectedCat;