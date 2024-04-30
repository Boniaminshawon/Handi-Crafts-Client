import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';
import { Pagination, Autoplay } from 'swiper/modules';




const Banner = () => {

    return (
        <div className="  
        font-primary">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4000,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}

            >


                
                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/cYnPzMW/maxresdefault-4.jpg")' }} className="bg-center bg-cover bg-opacity-100 bg-opacity  bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                    <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center "> We Believe The Best Ideas Emerge <br /> From The Simple Tools.</h1>
                    <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary  ">Discover the perfect fusion of rustic charm and timeless elegance on our jute and wooden art and craft website. Explore our handcrafted collection, where each piece tells a story of sustainability, craftsmanship, and natural beauty.</p>
                    <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                </div></SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/5TbpHPS/THESYS-Lookbook-07-Hi20-Ryan20and20-Goodman.webp")' }} className="bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center ">
                        <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center "> Best Modern Wood Handmade And <br /> Crafty Art Collection</h1>
                        <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary  ">Discover the perfect fusion of rustic charm and timeless elegance on our jute and wooden art and craft website. Explore our handcrafted collection, where each piece tells a story of sustainability, craftsmanship, and natural beauty.</p>
                      <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/QnWJHYS/maxresdefault-7.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                        <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center ">  Create By Hand, Created With Love.</h1>
                        <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary  ">Discover the perfect fusion of rustic charm and timeless elegance on our jute and wooden art and craft website. Explore our handcrafted collection, where each piece tells a story of sustainability, craftsmanship, and natural beauty.</p>
                      <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/q0VyfR3/360-F-677438536-Kd-Qws7lj-Ro6-MRd-Jdq-Bl-WLif-WRn-NTS1-Rt.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                        <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center text-white">Wooden Hand Craft Elegance in Art </h1>
                        <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary text-white " >Discover the perfect fusion of rustic charm and timeless elegance on our jute and wooden art and craft website. Explore our handcrafted collection, where each piece tells a story of sustainability, craftsmanship, and natural beauty.</p>
                      <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/LP9WCYW/handmade-natural-jute-knitted-items-for-home-decoration-scandinavian-style-beige-tones-no-people-sus.jpg")' }} className="bg-center bg-cover bg-opacity-100 bg-opacity  bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                    <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center text-white ">Designed By Artists, Made <br /> By Us, Just For You.</h1>
                    <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary text-white ">Discover the perfect fusion of rustic charm and timeless elegance on our jute and wooden art and craft website. Explore our handcrafted collection, where each piece tells a story of sustainability, craftsmanship, and natural beauty.</p>
                  <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                </div></SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/VxGTmdh/bohemian-style-decorating-ideas.jpg")' }} className="bg-center bg-cover bg-opacity-100 bg-opacity  bg-no-repeat h-[350px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center">
                    <h1 className="lg:text-5xl leading-10  md:text-4xl text-2xl font-heading font-bold text-center ">  Best Modern Wood Handmade And <br /> Crafty Art Collection.</h1>
                    <p className="md:mt-5 mt-2 text-sm md:text-xl font-medium lg:px-28 text-center font-primary text-white  ">Discover the perfect fusion of rustic charm and timeless elegance on our jute and wooden art and craft website. Explore our handcrafted collection, where each piece tells a story of sustainability, craftsmanship, and natural beauty.</p>
                  <div className="lg:mb-32 md:mt-5 mt-4"><a href="#scroll"><button className="px-3 py-2 text-white md:text-xl text-base font-heading1 font-semibold rounded bg-[#b18b5e]">Explore More</button></a></div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;