
import { BiSolidMessageDetail } from 'react-icons/bi';
import { FaBlenderPhone } from 'react-icons/fa6';
import { MdEmail, MdOutlineVerified } from "react-icons/md";
import {useNavigate} from 'react-router-dom' 
import PropTypes from 'prop-types';

const Booked = ({ booked }) => {
    const navigate = useNavigate();
    console.log(booked);

    const viewDetails = () => {
        navigate(`/view-property/${booked.id}`)
    }

    const backHome = () => {
        navigate('/')
    }

    return (
        <div>
            <div className=" mb-10 text-gray-900 ">
                <div className="container border grid grid-cols-12 mx-auto bg-gray-50">
                    <div className="flex flex-col p-6 col-span-full row-span-full  lg:p-10">
                        <h1 className="text-3xl font-semibold">{booked.agent.name}</h1>
                        <div>
                            <p className='raleway text-lg flex mt-2 animate__animated animate__flash animate__slower animate__infinite  '>Verified Agent <span><sup><MdOutlineVerified className='text-lg text-blue-600' /></sup></span></p>
                            
                            <div className='flex gap-5 mt-5'>
                                <p className=' px-4 py-2 bg-slate-300 cursor-pointer font-bold rounded-2xl flex items-center gap-1 text-sm text-black border hover:border-pink-400 transition-all duration-300'><FaBlenderPhone />Call</p>
                                <p className=' px-4 py-4 bg-gray-300 cursor-pointer flex items-center gap-1 font-bold rounded-2xl text-sm text-black border hover:border-pink-400 transition-all duration-300'><BiSolidMessageDetail />Message</p>
                                <p className=' cursor-pointer bg-zinc-300 px-4 flex items-center gap-1 py-2 font-bold rounded-2xl text-sm text-black border hover:border-pink-400 transition-all duration-300'><MdEmail />Email</p>
                        </div>
                            
                            
                        </div>
                        <div className='border shadow-xl p-5 mt-5 '>
                            <p className='lg:text-3xl font-bold raleway'>Property Details</p>
                            <p className='text-2xl font-medium mt-3 poppins'>{booked.estate_title}</p>
                            <p className='text-xl poppins mt-2'>{booked.description}</p>
                            <p className='flex gap-10 mt-2 raleway items-center'>Price :{booked.price}</p>
                            <p>Its can be <span className='font-medium underline'>{booked.status}</span></p>
                            <div className='flex gap-5 mt-3'>
                                <button className='btn btn-outline ' onClick={viewDetails}>View Details</button>
                                <button className='btn btn-outline' onClick={backHome}>Back Home</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
Booked.propTypes = {
    booked: PropTypes.object
};
export default Booked;