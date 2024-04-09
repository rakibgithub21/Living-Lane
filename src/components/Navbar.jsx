import { NavLink } from "react-router-dom";
import navLogo from '../assets/acquisition_12140441.png'

const Navbar = () => {
    return (
        <div className="navbar container mx-auto bg-base-100 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border  shadow-lg bg-base-100 border-purple-200 rounded-box w-52">

                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'text-lg hover:text-rose-500 '} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/update-profile'}>Update Profile</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/user-profile'}>User Profile</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/contact-us'}>Contact Us</NavLink>
                       
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="w-9 lg:w-14" src={navLogo} alt="" />
                    <p className="lg:text-2xl text-xl font-medium up lg:font-bold">Livin<span className="text-rose-500">g</span>Lane</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex poppins gap-5 font-medium text-lg">
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/update-profile'}>Update Profile</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/user-profile'}>User Profile</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/contact-us'}>Contact Us</NavLink>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;