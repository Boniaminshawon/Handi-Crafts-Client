import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Home/Footer";


const Root = () => {
    return (
        <div>
       
            <div  className="md:h-[79px] h-[64px]"><Navbar></Navbar></div>
            <div className="lg:container md:mx-1  lg:mx-auto  ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;