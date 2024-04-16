import { Link, NavLink } from "react-router-dom";
import navLogo from '../assets/acquisition_12140441.png'
import { useContext } from "react";
import { AuthContext } from "./AuthContextComponent";
// import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Loading";
// import Loading from "./Loading";

const Navbar = () => {

    const { logout, user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    const logoutUser = () => {
        logout()
        .then(() => {
            // Sign-out successful.
        //    toast.success('Sign-out successful');
        })
            .catch(() => {
                // An error happened.
                // console.log(error);
        });
    }


    return (
        <div className="navbar container mx-auto bg-base-100 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border  shadow-lg bg-base-100 border-purple-200 rounded-box w-52">

                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'text-lg hover:text-rose-500 '} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/bookmark'}>Bookmarked</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/update-profile'}>Update Profile</NavLink>
                        {
                            user && <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/user-profile'}> Profile</NavLink>
                        }
                        
                       
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                    <img className="w-9 lg:w-14" src={navLogo} alt="" />
                    <p className="lg:text-2xl raleway text-xl font-medium up lg:font-bold">Livin<span className="text-rose-500">g</span>Lane</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex poppins gap-1 font-medium text-lg">
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5 text-lg rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5 text-lg rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/bookmark'}>Bookmarked</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5 text-lg rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/update-profile'}>Update Profile</NavLink>

                    {
                        user && <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5 text-lg rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/user-profile'}>Profile</NavLink>
                    }
                </div>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div title={user?.displayName ? user.displayName :'Unknown'} className=" rounded-full">
                            <img className="rounded-full w-14 h-14 object-cover" src={user.photoURL} />
                        </div>
                        <button onClick={logoutUser} className="btn btn-primary ml-3">Logout</button>
                        
                    </> : <Link className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg md:px-6 md:py-3 py-2 px-4 " to={'/login'}>Log in</Link>
                }
                
            </div>
            
        </div>
    );
};

export default Navbar;