import { useLoaderData, useNavigate } from "react-router-dom";
import 'animate.css';


const CraftsDetails = () => {
    const craft = useLoaderData();
    
    const { item, image, stock, category, price, description, rating, customize, processing } = craft;

    const navigation = useNavigate();
    const handleGoBack = () => {
        navigation(-1);
    }

    return (
        <div className="md:my-10 my-6">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center bg-[#faf7f2] md:py-5 py-3 rounded font-heading mb-5 md:mb-10">Details of {item}</h1>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 animate__slow animate__animated animate__fadeInUpBig">
                    <img className="w-full h-full" src={image} alt="" />
                </div>

                <div className="flex-1 px-6 pb-6 rounded border-[#b18b5e] border space-y-4  animate__animated animate__slow animate__fadeInDownBig">

                    <div>
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-heading1 font-bold text-[#b18b5e]">{item}</h1>
                        <p className="md:text-xl text-lg font-p mt-5">{description}</p>
                    </div>

                    <div className="border border-[#b18b5e] my-4 md:my-7"></div>

                    <p className="text-lg font-medium font-p"><span className="text-[#b18b5e] text-xl font-semibold">Category:</span> {category}</p>
                    <div className="flex justify-between">
                        <p className="text-lg font-medium font-p"><span className="text-[#b18b5e] text-xl font-semibold">Price:</span> {price}</p>
                        <p className="text-lg font-medium font-p"><span className="text-[#b18b5e] text-xl font-semibold">Rating:</span> {rating}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg font-medium font-p"><span className="text-[#b18b5e] text-xl font-semibold">Customization:</span> {customize}</p>
                        <p className="text-lg font-medium font-p"><span className="text-[#b18b5e] text-xl font-semibold">Stock Status:</span> {stock}</p>

                    </div>
                    <p className="text-lg font-medium font-p"><span className="text-[#b18b5e] text-xl font-semibold">Processing Time:</span> {processing}</p>

                    <div className="border border-[#b18b5e] my-4 md:my-7"></div>

                    <div> <button className='text-white font-bold py-2 md:py-2 font-p   bg-[#b18b5e] rounded text-2xl w-full md:text-3xl' onClick={handleGoBack}>Go Back</button></div>

                </div>
            </div>

        </div>
    );
};

export default CraftsDetails;