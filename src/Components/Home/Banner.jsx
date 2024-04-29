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


                {/* handmade arts and crafts according to your needs */}
                {/* Wooden Hand Craft Elegance in Art */}
                {/* Designed by artists, made by us, just for you. */}
                {/* CREATED BY HAND.
CREATED WITH LOVE.
Manufactura is clean & responsive WordPress theme exclusively built for wood, leather and other handmade product crafters. */}
                {/* What we learned so far
WE BELIEVE THE BEST IDEAS EMERGE FROM THE SIMPLEST TOOLS */}
                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/cYnPzMW/maxresdefault-4.jpg")' }} className="bg-center bg-cover  bg-no-repeat h-[85vh] flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-heading font-bold"> CREATED BY HAND ,
                        CREATED WITH LOVE.</h1>
                        <p className="my-5">Manufactura is clean & responsive WordPress theme exclusively built for wood, leather and other handmade product crafters.</p>
                </div></SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/5TbpHPS/THESYS-Lookbook-07-Hi20-Ryan20and20-Goodman.webp")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]">Best modern wood handmade and crafty art collection</div></SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/QnWJHYS/maxresdefault-7.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]"></div></SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/q0VyfR3/360-F-677438536-Kd-Qws7lj-Ro6-MRd-Jdq-Bl-WLif-WRn-NTS1-Rt.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]"></div></SwiperSlide>


                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/LP9WCYW/handmade-natural-jute-knitted-items-for-home-decoration-scandinavian-style-beige-tones-no-people-sus.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]"></div></SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/VxGTmdh/bohemian-style-decorating-ideas.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]"></div></SwiperSlide>



                

              





            </Swiper>
        </div>
    );
};

export default Banner;