import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';
import { Pagination, Autoplay } from 'swiper/modules';



const Banner = () => {
    return (
        <div className="">
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




                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/cYnPzMW/maxresdefault-4.jpg")' }} className="bg-center bg-cover  bg-no-repeat h-[85vh]"></div></SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/QnWJHYS/maxresdefault-7.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]"></div></SwiperSlide>

                      
                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/xGrJztL/maxresdefault-8.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]"></div></SwiperSlide>


                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/q0VyfR3/360-F-677438536-Kd-Qws7lj-Ro6-MRd-Jdq-Bl-WLif-WRn-NTS1-Rt.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]"></div></SwiperSlide>

                <SwiperSlide><div style={{ backgroundImage: 'url("https://i.ibb.co/xFLdMfm/shkatulka-serdechko-s-gravirovkoj-2147464153.jpg")' }} className="bg-center bg-cover bg-no-repeat h-[85vh]"></div></SwiperSlide>
   
        



            </Swiper>
        </div>
    );
};

export default Banner;