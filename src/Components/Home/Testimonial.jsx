import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className="my-10">
            <h1 className="md:text-3xl text-2xl  lg:text-4xl font-bold text-center bg-[#faf7f2]  py-5 rounded font-heading1 mb-6"> People Love Us</h1>
            <p className="font-p md:text-lg text-base text-center mt-5 mb-10 md:px-10 px-1 lg:px-20">We offer a curated collection of exquisite jute and wooden handicrafts that add warmth, elegance, and a touch of nature's beauty to their homes. Our commitment to exceptional craftsmanship, sustainability, and personalized service ensures that every purchase is not just a product but an experience. </p>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 lg:gap-8 mb-5">
                <div className="bg-[#f7ede5] font-heading1 shadow-xl  text-xl font-medium text-[#9a6e4a] p-5 text-center">
                    <div className="p-10 border-white border-2 ">
                    <p className="font-heading text-3xl"> 4561</p>
                    <p> Happy Customer</p>
                    </div>
                </div>
                <div className="bg-[#e9f2ec] font-heading1 shadow-xl text-xl font-medium text-[#4b8960] p-5 text-center">
                    <div className="p-10 border-white border-2">
                    <p className="font-heading text-3xl"> 261</p>
                    <p> Design Awardsr</p>
                    </div>
                </div>
                <div className="bg-[#eaeef9] font-heading1 shadow-xl text-xl font-medium text-[#4c5d8c] p-5 text-center">
                    <div className="p-10 border-white border-2">
                    <p className="font-heading text-3xl"> 2961</p>
                    <p> 5-Star Rating</p>
                    </div>
                </div>
                <div className="bg-[#f6e8eb] font-heading1 shadow-xl text-xl font-medium text-[#8f4d5b] p-5 text-center">
                    <div className="p-10 border-white border-2">
                    <p className="font-heading text-3xl"> 530</p>
                    <p> Public Media</p>
                    </div>
                </div>

               
            </div>

            <div className=" bg-[#edf9ff bg-[#ddeaf0] shadow-2xl">
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


                    <SwiperSlide><div className=" md:py-10  lg:md:py-10 py-4 lg:py-16 flex flex-col justify-center items-center">
                        <p className="md:text-3xl text-2xl"><FaQuoteLeft></FaQuoteLeft></p>
                        <i  className="md:text-2xl text-base lg:text-[28px] text-[#264f5d] leading-7 text-center font-medium font-heading1 md:px-20 lg:px-36">Handicrafts truly exceeded my expectations! <br /> I purchased a stunning jute wall hanging and a set of wooden coasters, and I couldn't be happier with the quality and craftsmanship. Each piece adds such warmth and character to my home. Highly recommend! </i>
                        <div className=' flex items-center gap-4 text-base md:mt-5  mt-1 text-center '>
                            <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src="https://i.ibb.co/M6PJ69B/images-11.jpg" />
                            </div>
                            <div className='text-start'>
                                <p className="text-lg">by <span className='font-primary font-bold text-amber-950 lg:text-xl md:text-base text-xs'>- Jessica Nguyen</span></p>
                                <i className='md:text-lg text-sm font-medium'>Marketing Manager</i>
                            </div>
                        </div>


                    </div></SwiperSlide>
                    <SwiperSlide><div className=" md:py-10 py-4 lg:py-16 flex flex-col justify-center items-center">
                        <p className="md:text-3xl text-2xl"><FaQuoteLeft></FaQuoteLeft></p>
                        <i  className="md:text-2xl text-base lg:text-[28px] text-[#264f5d] leading-7 text-center font-medium font-heading1 md:px-20 lg:px-36">"As a nature enthusiast, I'm always on the lookout for eco-friendly decor options. Sophia's Crafts delivered beyond my hopes with their exquisite jute and wooden creations. The attention to detail and commitment to sustainability are truly commendable. Thank you for bringing nature's beauty into my home!</i>

                        <div className=' flex items-center gap-4 text-base md:mt-5  mt-1 text-center '>
                            <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src="https://i.ibb.co/ZgrxyqR/Sarah-Thompson2.jpg" />
                            </div>
                            <div className='text-start'>
                                <p className="text-lg">by <span className='font-primary font-bold text-amber-950 lg:text-xl md:text-base text-xs'> David Martinez</span></p>
                                <i className='md:text-lg text-sm font-medium'>  Environmentalist</i>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className=" md:py-10 py-4 lg:py-16 flex flex-col justify-center items-center">
                        <p className="md:text-3xl text-2xl"><FaQuoteLeft></FaQuoteLeft></p>
                        <i  className="md:text-2xl text-base lg:text-[28px] text-[#264f5d] leading-7 text-center font-medium font-heading1 md:px-20 lg:px-36">I recently received a beautiful jute and wooden jewelry set from Sophia's Crafts as a gift, and I'm absolutely in love! The intricate design and earthy feel make each piece truly unique. I've already received so many compliments. Can't wait to explore more of their collection!
                        </i>

                        <div className=' flex items-center gap-4 text-base md:mt-5  mt-1 text-center '>
                            <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src="https://i.ibb.co/PG04nHW/1631149851573.jpg" />
                            </div>
                            <div className='text-start'>
                                <p className="text-lg">by <span className='font-primary font-bold text-amber-950 lg:text-xl md:text-base text-xs'> Sarah Thompson</span></p>
                                <i className='md:text-lg text-sm font-medium'> Fashion Blogger</i>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className=" md:py-10 py-4 lg:py-16 flex flex-col justify-center items-center">
                        <p className="md:text-3xl text-2xl"><FaQuoteLeft></FaQuoteLeft></p>
                        <i  className=" md:text-2xl text-base lg:text-[28px] text-[#264f5d] leading-7 text-center font-medium font-heading1 md:px-20 lg:px-36">"Sophia's Crafts has become my go-to destination for artisanal home decor. Their jute and wooden products add such a cozy and rustic vibe to my living space. The craftsmanship is exceptional, and I appreciate the emphasis on sustainability. A definite must-visit for anyone looking to elevate their home decor game!</i>

                        <div className=' flex items-center gap-4 text-base md:mt-5  mt-1 text-center '>
                            <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src="https://i.ibb.co/Dp12F4m/images-10.jpg" />
                            </div>
                            <div className='text-start'>
                                <p className="text-lg">by <span className='font-primary font-bold text-amber-950 lg:text-xl md:text-base text-xs'> - Michael Lee</span></p>
                                <i className='md:text-lg text-sm font-medium'>  Homeowner </i>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className=" md:py-10 py-4 lg:py-16 flex flex-col justify-center items-center">
                        <p className="md:text-3xl text-2xl"><FaQuoteLeft></FaQuoteLeft></p>
                        <i  className=" md:text-2xl text-base lg:text-[28px] text-[#264f5d] leading-7 text-center font-medium font-heading1 md:px-20 lg:px-36">"I've been searching for the perfect gift for my environmentally conscious friend, and I hit the jackpot with HandiCrafts! Their collection of jute and wooden handicrafts is not only visually stunning but also aligns with my friend's values.  Can't wait to see my friend's reaction! </i>
                        <div className=' flex items-center gap-4 text-base md:mt-5  mt-1 text-center '>
                            <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src="https://i.ibb.co/kH6x2d9/images-2.jpg" />
                            </div>
                            <div className='text-start'>
                                <p className="text-lg">by <span className='font-primary font-bold text-amber-950 lg:text-xl md:text-base text-xs'>Emily Johnson</span></p>
                                <i className='md:text-lg text-sm font-medium'> Interior Designer</i>
                            </div>
                        </div>


                    </div></SwiperSlide>
                    <SwiperSlide><div className=" md:py-10 py-4 lg:py-16 flex flex-col justify-center items-center">
                        <p className="md:text-3xl text-2xl"><FaQuoteLeft></FaQuoteLeft></p>
                        <i  className=" md:text-2xl text-base lg:text-[28px] text-[#264f5d] leading-7 text-center font-medium font-heading1 md:px-20 lg:px-36">I stumbled upon Sophia's Crafts while browsing for unique decor pieces, and I'm so glad I did! Their jute and wooden artistry is simply exquisite. I purchased a set of coasters and a decorative bowl for my coffee table, and they have become conversation starters whenever I have guests over. Thank you for adding such beauty and elegance to my home! </i>
 
                        <div className=' flex items-center gap-4 text-base md:mt-5  mt-1 text-center '>
                            <div className="">
                                <img className=' md:w-16 md:h-16  w-12 h-12 rounded-full' src="https://i.ibb.co/Xznv2Gz/pc-Zackery-Michael-436763-L5-C-08-300-dpi.webp" />
                            </div>
                            <div className='text-start'>
                                <p className="text-lg">by <span className='font-primary font-bold text-amber-950 lg:text-xl md:text-base text-xs'> Alex Turner</span></p>
                                <i className='md:text-lg text-sm font-medium'>  Business Analyst</i>
                            </div>
                        </div>
                    </div></SwiperSlide>

                </Swiper>

            </div>
           

        </div>
    );
};

export default Testimonial;