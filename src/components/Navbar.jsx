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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="w-9 lg:w-14" src={navLogo} alt="" />
                    <p className="lg:text-2xl text-xl font-medium up lg:font-bold">Livin<span className="text-rose-500">g</span>Lane</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex poppins gap-5 font-medium text-lg">
                    <NavLink>Home</NavLink>
                    <NavLink>Update Profile</NavLink>
                    <NavLink>User Profile</NavLink>
                    <NavLink>Contact Us</NavLink>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;