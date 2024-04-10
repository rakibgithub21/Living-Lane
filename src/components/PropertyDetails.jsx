import { useLoaderData, useParams } from 'react-router-dom'

import { FaLocationDot } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";
import { MdOutlineBathtub } from "react-icons/md";
import { FaVectorSquare } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

// agent profile icons
import { MdOutlineVerified } from "react-icons/md";
import { FaBlenderPhone } from "react-icons/fa";

import { BiSolidMessageDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import image4 from '../assets/images/4.jpg'

const PropertyDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams()
    const data = datas.find(data => data.id == id);
    const { estate_title, agent, image_url, description, details_location, additional_details, bathrooms, area, status, price, bedrooms, facilities } = data;
    const { details, image, name } = agent;
    console.log(data);
    return (
        <div className='container mx-auto my-10'>
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

            <div className='grid grid-cols-1 lg:grid-cols-5 my-8 gap-10'>

                <div className='lg:col-span-3'>
                    <div>

                        <div className='mt-5'>
                            <h1 className='text-4xl font-semibold raleway mb-4'>{estate_title}</h1>
                            <p className='text-2xl mb-2 text-[#12132d99] flex gap-1 items-center poppins'><FaLocationDot /><span>{details_location}</span></p>
                            <p className='text-xl mb-8 poppins text-[#12132d99]'>{description}</p>
                        </div>

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
                                    <FaVectorSquare />
                                    <span>{area}</span>
                                </p>
                            </div>

                        </div>

                        <div className='flex gap-5 mt-5'>
                            {
                                facilities?.map((facility, idx) => <p
                                    className='raleway flex gap-1 items-center font-medium text-xl'
                                    key={idx}
                                ><FiCheckSquare className='text-green-500' />{facility}</p>)
                            }
                        </div>

                    </div>


                    <div className='mt-6'>
                        <p className='text-xl raleway'> {additional_details}</p>
                    </div>

                </div>

                {/* agent div */}
                <div className='lg:col-span-2 p-4'>

                    <div className='border border-rose-400 p-4 rounded-2xl'>

                        <div>
                            <div>
                                <img className='w-full object-cover h-[300px] rounded-2xl' src={image} alt="" />
                                <div className='px-6 py-2 mb-2'>
                                    <p className='text-4xl  font-semibold raleway'>{name}</p>
                                    <p className='raleway font-medium flex gap-1 text-xl'>Verified Agent <span><MdOutlineVerified className='text-blue-600' /></span></p>
                                    <p className='mb-2 font-medium raleway'>{estate_title}</p>
                                    <p className='text-lg poppins'>{details}</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center gap-2'>
                                    <p className='border px-6 py-4 font-bold rounded-2xl flex items-center gap-1 text-lg text-black'><FaBlenderPhone />Call</p>
                                    <p className='border px-6 py-4 flex items-center gap-1 font-bold rounded-2xl text-lg text-black'><BiSolidMessageDetail />Message</p>
                                    <p className='border px-6 flex items-center gap-1 py-4 font-bold rounded-2xl text-lg text-black'><MdEmail />Email</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


            </div>

        </div>
    );
};

export default PropertyDetails;