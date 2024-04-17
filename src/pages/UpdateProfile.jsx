import { useContext } from "react";
import { AuthContext } from "../components/AuthContextComponent";
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";



const UpdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    if (!user) {
        return <Navigate to={'/login'}></Navigate>;
    }

    const onSubmit = (data) => {
        const { name, image, email } = data;
        updateUser(name, image, email)
            .then((result) => {
                console.log('profile updated successfully', result);
                window.location.reload();
            })
            .catch(() => {
                console.log('error occurred during profile update');
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[65vh] bg-gradient-to-b from-slate-300 to-
        bg-slate-50">
            <Helmet>
                <title>LivingLane || Update Profile </title>
            </Helmet>
            <div data-aos="zoom-out-down" data-aos-duration="1000" data-aos-delay="100" className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-white">Update Your Profile</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                    Welcome, <span className="font-semibold text-lg">{user.displayName}</span>! You can update your details below:
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                        <input defaultValue={user?.displayName} {...register("name")} type="text" id="name" className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Profile Link</label>
                        <input defaultValue={user?.photoURL} {...register("image")} type="text" id="link" className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                        <input  disabled  {...register("email")} defaultValue={user?.email} type="email" id="email" className="bg-gray-100 cursor-not-allowed dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-semibold rounded-lg text-sm py-2.5 w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
