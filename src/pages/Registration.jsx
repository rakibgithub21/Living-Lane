import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../components/AuthContextComponent";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Registration = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    // for password show and hide
    const [showPassword, setShowPassword] = useState(false)
    const handlePassword = () => {
        setShowPassword(!showPassword)
    }
    // -----------------------------------

    // react hook from for get input value and easy to validation:
    const {
        register,
        handleSubmit,
        
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, email, image, password } = data;
        //create user:
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // update user
                updateUser(name, image)
                toast("Registration success.Login now")
                
            })
            .catch(error => {
            console.log(error);
        })
        
        


    
    }
    // --------------------------------------------------


    return (
        <div className="min-h-[calc(100vh-337px)] flex justify-center items-center">
            <div className="w-full md:w-4/6 lg:w-3/6 mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-10 space-y-8">
                    <p className="text-4xl text-center font-semibold">Registration your account</p>
                    <p className="text-xl text-center mx-auto md:w-3/4 ">Welcome to our platform! Please fill out the following information to create your account. Your security is our top priority, so please ensure that you provide accurate information.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#d17e9b71] ring-1 ring-purple-500 rounded-lg px-10 py-5">
                    <div className="space-y-1 text-lg">
                        <label htmlFor="Text" className="block  dark:text-gray-600">Name</label>
                        <input {...register("name", { required: true})} type="text" id="name" placeholder="Type Your Name" className="ring-1 focus:ring-2 focus:ring-stone-950 ring-indigo-500 input input-bordered w-full" />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                        
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="email" className="block  dark:text-gray-600">Email</label>
                        <input {...register("email", { required: true })} type="email" id="email" placeholder="Type Your Email" className="focus:ring-2 focus:ring-stone-950 input ring-1 ring-indigo-500 input-bordered w-full" />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="image" className="block dark:text-gray-600">Profile Image </label>
                        <input {...register("image", { required: true })} type="text" id="image" placeholder="Your Image Link" className="input focus:ring-2 focus:ring-stone-950 ring-1 ring-indigo-500 input-bordered w-full" />
                        {errors.image && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="space-y-1 relative text-lg">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input {...register("password", {
                            required: true,
                            validate: {
                                minLength: value => value.length >= 6,
                                uppercase: value => /[A-Z]/.test(value),
                                lowercase: value => /[a-z]/.test(value)
                            }
                            
                        
                        })} type={showPassword ?"text":"password"} id="password" placeholder="Type Your Email" className="input focus:ring-2 focus:ring-stone-950 ring-1 ring-indigo-500 input-bordered w-full" />
                        <p onClick={handlePassword} className="absolute top-11 right-5">
                            {
                                showPassword ? <FaRegEye className="text-xl" /> : <FaRegEyeSlash className="text-xl" />
                            }
                        </p>
                        {errors.password && errors.password.type === "required" && (
                            <span className="text-red-500">This field is required</span>
                        )}
                        {errors.password && errors.password.type === "minLength" && (
                            <p className="text-red-500">Password must be at least 6 characters long</p>
                        )}
                        {errors.password && errors.password.type === "uppercase" && (
                            <p className="text-red-500">Password must contain at least one capital letter</p>
                        )}
                        {errors.password && errors.password.type === "lowercase" && (
                            <p className="text-red-500">Password must contain at least one lowercase letter</p>
                        )}
                    </div>
                    <button type="submit" className="block text-xl font-medium text-white bg-[#4556ebea] hover:text-black hover:bg-[#4652c081] py-4 rounded-xl w-full">Login</button>
                </form>
                <p className="text-lg text-center  sm:px-6 dark:text-gray-600">Already have an account?
                    <Link className="underline font-medium hover:text-blue-400 text-lg" to={'/login'}>Login</Link>
                </p>
            </div>
            <ToastContainer position="top-center"/>
        </div>
    );
};

export default Registration;