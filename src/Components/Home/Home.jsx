import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftSection from "./CraftSection";
import Blogs from "./Blogs";
import Testimonial from "./Testimonial";




const Home = () => {

    const allCrafts = useLoaderData();
    

    return (
        <div>
            <Banner></Banner>

            <div id="scroll" className="md:my-16 my-8">
                <h1 className="font-heading1 text-center md:text-3xl text-2xl  lg:text-4xl font-bold md:mb-10 ">Designed by artists, made <br /> by us, just for you.</h1>

                <p className="font-p md:text-lg text-base text-center my-5 lg:px-20 px-1 md:px-10" >Indulge in a world of artistry and craftsmanship with our exquisite collection of jute and wooden handicrafts. From intricately designed jewelry pieces to charming home decor items, each product is a testament to the skilled hands and creative vision of our artisans. Explore our curated selection and discover the perfect blend of natural beauty, sustainability, and timeless elegance in every meticulously crafted piece. Elevate your space and adorn yourself with the unique charm of our jute and wooden creations.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allCrafts.slice(0, 6).map(craft => <CraftSection key={craft._id} craft={craft}></CraftSection>)
                    }
                </div>
            </div>

            <Blogs ></Blogs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;