import person1 from '../assets/6_63.jpg'
import person2 from '../assets/download.jpg'
import person3 from '../assets/Alex.jpg'
import person4 from '../assets/6_57.jpg'
import person5 from '../assets/images.jpg'
import person6 from '../assets/6_13.jpg'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";

const Agent = () => {
    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4">
                    <h3 className=" text-2xl md:text-3xl mb-10 lg:text-5xl md:w-4/5 lg:w-2/3 mx-auto text-center  font-bold poppins"><span className="text-rose-400 raleway">Discover</span> Your Perfect Property Match with Our Expert Agents!</h3>
                    <p className=" text-gray-600 text-xl md:text-2xl ">Say goodbye to endless searching! Our seasoned real estate agents specialize in various property types, ensuring a perfect match for every client. From charming single-family homes to relaxing vacation rentals, we guide you with expertise and personalized attention. Let us lead you to your dream property – reach out today to start your journey home!</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12  md:grid-cols-2 lg:grid-cols-3">
                   
                    
                   <div className="space-y-4 border px-4 py-2 rounded-xl shadow-md ">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-lg" src={person1} />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Sarah Ali</h4>
                            <p className="text-lg font-medium raleway dark:text-gray-600 text-center"> Real Estate Agent </p>
                            <p className="text-lg dark:text-gray-600 text-center"> Single homes Specialized</p>
                            <div className="flex mt-2 text-2xl space-x-2">
                                <a href=""><TiSocialFacebook className='text-blue-600' /></a>
                                <a href=""><TiSocialInstagram className='text-pink-400'/></a>
                                <a href=""><FaSquareXTwitter /></a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="space-y-4 border px-4 py-2 rounded-md shadow-md">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={person2} />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Thomas Leroy</h4>
                            <p className="text-lg font-medium raleway dark:text-gray-600 text-center"> Real Estate Agent </p>
                            <p className="text-lg dark:text-gray-600 text-center"> Townhouse Specialized</p>
                            <div className="flex mt-2 text-2xl space-x-2">
                                <a href=""><TiSocialFacebook className='text-blue-600' /></a>
                                <a href=""><TiSocialInstagram className='text-pink-400' /></a>
                                <a href=""><FaSquareXTwitter /></a>
                            </div>
                        </div>
                    </div>
                   <div className="space-y-4 border px-4 py-2 rounded-md shadow-md">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={person3} />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Alex Jenkins</h4>
                            <p className="text-lg font-medium raleway dark:text-gray-600 text-center"> Real Estate Agent </p>
                            <p className="text-lg dark:text-gray-600 text-center"> Student Housing Specialized</p>
                        
                            <div className="flex mt-2 text-2xl space-x-2">
                                <a href=""><TiSocialFacebook className='text-blue-600' /></a>
                                <a href=""><TiSocialInstagram className='text-pink-400' /></a>
                                <a href=""><FaSquareXTwitter /></a>
                            </div>
                        </div>
                    </div>
                   <div className="space-y-4 border px-4 py-2 rounded-md shadow-md">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={person4} />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Emily Ken</h4>
                            <p className="text-lg font-medium raleway dark:text-gray-600 text-center"> Real Estate Agent </p>
                            <p className="text-lg dark:text-gray-600 text-center"> Senior Living Specialized</p>
                            <div className="flex mt-2 text-2xl space-x-2">
                                <a href=""><TiSocialFacebook className='text-blue-600' /></a>
                                <a href=""><TiSocialInstagram className='text-pink-400' /></a>
                                <a href=""><FaSquareXTwitter /></a>
                            </div>
                        </div>
                    </div>
                   <div className="space-y-4 border px-4 py-2 rounded-md shadow-md">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={person5} />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Anjo Lebra</h4>
                            <p className="text-lg font-medium raleway dark:text-gray-600 text-center"> Real Estate Agent </p>
                            <p className="text-lg dark:text-gray-600 text-center"> Vacation Specialized</p>
                            <div className="flex mt-2 text-2xl space-x-2">
                                <a href=""><TiSocialFacebook className='text-blue-600' /></a>
                                <a href=""><TiSocialInstagram className='text-pink-400' /></a>
                                <a href=""><FaSquareXTwitter /></a>
                            </div>
                        </div>
                    </div>
                   <div className="space-y-4 border px-4 py-2 rounded-md shadow-md">
                        <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={person6} />
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">David Jhon</h4>
                            <p className="text-lg font-medium raleway dark:text-gray-600 text-center"> Real Estate Agent </p>
                            <p className="text-lg dark:text-gray-600 text-center"> Apartment Specialized</p>
                            <div className="flex mt-2 text-2xl space-x-2">
                                <a href=""><TiSocialFacebook className='text-blue-600' /></a>
                                <a href=""><TiSocialInstagram className='text-pink-400' /></a>
                                <a href=""><FaSquareXTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agent;