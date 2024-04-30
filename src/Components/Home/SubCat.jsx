import { useEffect, useState } from "react";
import Loader from "../Loader";
import SingleSubCat from "./SingleSubCat";


const SubCat = () => {
    const [loading, setLoading] = useState(true);
    const [subCat, setSubCat] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('https://handi-crafts-server.vercel.app/subCategories')
            .then(res => res.json())
            .then(data => {

                setSubCat(data);
                setLoading(false);

            })

    }, [])
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className="md:mb-16 mb-8">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center bg-[#faf7f2] py-3   md:py-5 rounded font-heading1 mb-7">Explore Our Art and Craft Category</h1>

            <p className="font-p md:text-lg text-base text-center md:mb-7 my-4 lg:px-20 px-1 md:px-10">
                Dive into the rustic charm of jute and wooden craft in our subcategory section, where traditional craftsmanship meets contemporary design.Uncover the beauty of sustainable materials and ignite your creativity with our curated collection of jute and wooden craft subcategories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
                {
                    subCat.map(singleSubCat => <SingleSubCat key={singleSubCat._id} singleSubCat={singleSubCat}></SingleSubCat>)
                }
            </div>
        </div>
    );
};

export default SubCat;