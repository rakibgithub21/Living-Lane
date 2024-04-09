import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { LuBedSingle } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";


const Card = ({ card }) => {
    console.log(card)
    const { id, image_url, segment_name, nearby_attractions, bedrooms,bathrooms, price, status, location, } = card
    return (
        <div className="card relative bg-base-100 shadow-xl border-2 transition-all duration-500 hover:scale-95 hover:border-pink-400">
            <figure><img className="h-[300px] w-full" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="space-y-4">
                    
                        <h2 className="card-title raleway">{segment_name}</h2>
                    
                    <hr />
                    <div className=" font-medium raleway">
                        <p className="underline font-semibold">Near By Places</p>
                        
                        {
                            
                            nearby_attractions.map((near, idx) => <span
                            className="flex gap-1 items-center"
                            key={idx}
                            > <TbPointFilled />{near}</span>)
                        }
                    </div>
                    <div className="flex justify-between text-xl font-medium poppins">
                        <div>
                            <p className="flex gap-1 items-center">{bedrooms} <LuBedSingle /></p>
                            <p className="font-light">Bedrooms</p>
                       </div>
                        <div>
                            <p className="flex gap-1 items-center">{bedrooms} <LuBath /></p>
                            <p className="font-light">Bathrooms</p>
                       </div>
                    </div>
                    <p className="flex poppins text-lg items-center gap-2"><IoLocationSharp className="text-[#AEAEAE] text-2xl" /><span className="text-[#6b6363]">{location}</span></p>
                </div>
                
            </div>
            <div data-aos="fade-up-right" data-aos-duration="1200" data-aos-delay="700" style={{ clipPath: 'polygon(35% 9%, 70% 0, 93% 31%, 98% 76%, 63% 94%, 30% 96%, 10% 67%, 12% 31%)', backgroundColor: status === 'sale' ? '#cd84f1' : '#ffaf40' }} className=" absolute top-0 right-0  py-4 px-4 rounded-full">
                <p className="font-bold poppins">{status}</p>
            </div>
            <div data-aos="zoom-in-down" data-aos-duration="1000" className="absolute w-48 bg-green-100 bottom-[315px] md:border-l-4  md:border-l-red-400  md:rounded-tr-2xl pl-2 py-2 md:-left-5 rounded-l-md ">
                <p className="font-bold poppins">{price}</p>
            </div>

        </div>
    );
};

export default Card;