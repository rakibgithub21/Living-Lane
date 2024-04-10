import { useLoaderData, useParams } from 'react-router-dom'

import { FaLocationDot } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineBathtub } from "react-icons/md";
import { TbChartArea } from "react-icons/tb";

import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import image4 from '../assets/images/4.jpg'

const PropertyDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams()
    const data = datas.find(data => data.id == id);
    const { estate_title, image_url, description, details_location, additional_details, bathrooms, area, status, price, bedrooms, pet_friendly, facilities } = data;
    console.log(data);
    return (
        <div className='container mx-auto my-10'>
            {/* ----------- */}
            <h1 className='text-4xl font-semibold raleway mb-4'>{estate_title}</h1>
            <p className='text-2xl mb-2 text-[#12132d99] flex gap-1 items-center poppins'><FaLocationDot /><span>{details_location}</span></p>
            <p className='text-xl mb-8 poppins text-[#12132d99]'>{description}</p>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>

                <div className='lg:col-span-3 object-cover border-purple-700'>
                    <img className='w-full rounded-lg h-[700px]' src={image_url} alt="" />
                </div>

                <div className='lg:col-span-2 grid grid-cols-2  border-red-500 gap-x-10 gap-y-5'>
                    <div>
                        <img className='w-full object-cover h-full rounded-lg' src={image1} alt="" />
                    </div>
                    <div>
                        <img className='w-full h-full object-cover rounded-lg' src={image2} alt="" />
                    </div>
                    <div>
                        <img className='w-full h-full object-cover  rounded-lg' src={image3} alt="" />
                    </div>
                    <div>
                        <img className='w-full h-full object-cover rounded-lg' src={image4} alt="" />
                    </div>
                </div>
            </div>
            {/* ----------------- */}

            <div className='grid grid-cols-1 lg:grid-cols-5 my-8'>
                <div className='lg:col-span-3'>
                    <div>
                        <p className='text-4xl font-semibold raleway mb-5'>
                            {price} <sup><span style={{ clipPath: 'polygon(35% 9%, 70% 0, 93% 31%, 98% 76%, 63% 94%, 30% 96%, 10% 67%, 12% 31%)', backgroundColor: status === 'sale' ? '#cd84f1' : '#ffaf40' }} className='bg-rose-300 rounded-full inline-block p-4 font-medium text-black'>{status}</span></sup>
                       </p>
                        <h3 className='font-semibold text-3xl poppins'>Highlights</h3>
                        <div className='mt-3 flex justify-between'>

                            <div>
                                <p className='text-xl font-semibold'>Bedrooms</p>
                                <p className='text-3xl flex items-center gap-2 raleway font-medium'>
                                    <LiaBedSolid />
                                    <span>{bedrooms}</span>
                                </p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Bathrooms</p>
                                <p className='text-3xl flex items-center gap-2 raleway font-medium'>
                                    <MdOutlineBathtub />
                                    <span>{bathrooms}</span>
                                </p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Areas</p>
                                <p className='text-3xl flex items-center gap-2 raleway font-medium'>
                                    <TbChartArea />
                                    <span>{area}</span>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='mt-6'>
                        <p className='text-lg raleway'> {additional_details}</p>
                    </div>
                </div>
                <div className='lg:col-span-2'>

                </div>
            </div>

        </div>
    );
};

export default PropertyDetails;