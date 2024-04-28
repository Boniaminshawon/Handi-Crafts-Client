import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftSection from "./CraftSection";


const Home = () => {

    const allCrafts = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <div className="my-16">
                <h1 className="font-heading1 text-center text-4xl font-bold mb-10 ">Designed by artists, made <br /> by us, just for you.</h1>
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allCrafts.slice(0, 6).map(craft => <CraftSection key={craft._id} craft={craft}></CraftSection>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;