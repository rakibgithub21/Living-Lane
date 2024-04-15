import { SlLocationPin } from "react-icons/sl";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { FaFileAlt } from "react-icons/fa";
import 'animate.css';

const Best = () => {
    return (
        <section>
            <h3 className="text-5xl animate__animated animate__swing text-center font-medium my-20 hover:text-rose-400 transition-colors duration-300 raleway underline">Why Choose Us</h3>
            <div className="flex flex-wrap justify-evenly gap-10 ">
                {/* various location */}
                <div  className="border-4 rounded-xl w-[350px] border-[#9a9a9a] p-10 space-y-10 hover:border-[#bc986b99]">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#bc986b99] text-[#bc986b99]">
                        <SlLocationPin className="text-4xl" />
                    </div>

                    <div className="poppins space-y-3">
                        <h3 className="text-3xl font-medium">Various Location</h3>
                        <p className="text-xl">We have lots of properties in various locations available for purchase.</p>
                    </div>

                </div>
                {/* Financial made easy */}
                <div  className="border-4 rounded-xl  w-[350px] border-[#9a9a9a] p-10 space-y-10 hover:border-[#bc986b99]">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#bc986b99] text-[#bc986b99]">
                        <FaPeopleGroup className="text-4xl" />
                    </div>

                    <div className="poppins space-y-3">
                        <h3 className="text-3xl font-medium">Top Agents</h3>
                        <p className="text-xl">Unmatched expertise, dedication, and results: Our top agents redefine excellence in real estate.</p>
                    </div>

                </div>
                {/* Trusted by People */}
                <div  className="border-4 rounded-xl w-[350px] border-[#9a9a9a] p-10 space-y-10 hover:border-[#bc986b99]">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#bc986b99] text-[#bc986b99]">
                        <GiMoneyStack className="text-4xl" />
                    </div>

                    <div className="poppins space-y-3">
                        <h3 className="text-3xl font-medium">Easy Financing</h3>
                        <p className="text-xl">Our Stress-free finance department that can find financial solutions to save your money.</p>
                    </div>

                </div>
                {/* Top Agent */}
                <div  className="border-4 rounded-xl  w-[350px] border-[#9a9a9a] p-10 space-y-10 hover:border-[#bc986b99]">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#bc986b99] text-[#bc986b99]">
                        <FaFileAlt className="text-4xl" />
                    </div>

                    <div className="poppins space-y-3">
                        <h3 className="text-3xl font-medium">Transparency</h3>
                        <p className="text-xl">Discover transparency in real estate with our trusted approach.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Best;