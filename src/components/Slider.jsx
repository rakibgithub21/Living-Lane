import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import slide1 from '../assets/modernsingle.jpg';
import slide2 from '../assets/luxury-apartments.jpg';
import slide3 from '../assets/Townhouse.jpg';
import slide4 from '../assets/Student-Housing-Renovation-Clark-Nexsen-1200.jpg';
import slide5 from '../assets/senior.jpg';
import slide6 from '../assets/vacational rental.webp';


const Slider = () => {

    const slideOneStyle = {
        backgroundImage:`url(${slide1})`,
    }
    const slideTwoStyle = {
        backgroundImage:`url(${slide2})`,
    }
    const slideThreeStyle = {
        backgroundImage:`url(${slide3})`,
    }
    const slideFourthStyle = {
        backgroundImage: `url(${slide4})`,
    }
    const slideFifthStyle = {
        backgroundImage: `url(${slide5})`,
    }
    const slideSixthStyle = {
        backgroundImage: `url(${slide6})`,
    }
    return (
        <div className="z-10">
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 2000,

                }}






            >
                <SwiperSlide>
                    <div className="hero  min-h-[60vh]" style={slideOneStyle}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl font-medium  ">Modern Single-Family Home</h1>
                                <p className="mb-5  max-w-md">A beautiful modern single-family home located in a quiet neighborhood.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero  min-h-[60vh]" style={slideTwoStyle}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl font-medium ">Luxury Apartment</h1>
                                <p className="mb-5 max-w-md">A luxurious apartment with stunning city views.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[60vh]" style={slideThreeStyle}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl font-medium ">Cozy Townhouse</h1>
                                <p className="mb-5 max-w-md">A charming townhouse with a fenced backyard, perfect for families.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[60vh]" style={slideFourthStyle}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl font-medium ">Student Housing</h1>
                                <p className="mb-5 max-w-md">Spacious student housing with shared amenities and convenient location near campus.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[60vh]" style={slideFifthStyle}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl font-medium ">Senior Living Community</h1>
                                <p className="mb-5 max-w-md">A vibrant senior living community offering various activities and amenities for retirees.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[60vh]" style={slideSixthStyle}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-3xl font-medium ">Vacation Rental</h1>
                                <p className="mb-5 max-w-md">A cozy vacation rental perfect for a getaway, nestled in a scenic location.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>



        </div>
    );
};

export default Slider;