import { useContext } from "react";
import { AuthContext } from "../components/AuthContextComponent";
import {Navigate} from 'react-router-dom'

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return<Navigate to={'/login'}></Navigate>
    }
    return (
        
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <div className="bg-white  border-2  border-rose-200 rounded-md shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-lg grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600 text-center lg:text-start un">
                                <p className="font-medium mb-2 text-2xl raleway">Update Profile</p>
                                <p className="text-lg poppins">Please fill out all the fields so carefully.</p>
                            </div>
                            <hr className="my-2 lg:hidden"/>

                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-lg grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5">
                                        <label className="poppins" htmlFor="full_name ">Full Name</label>
                                        <input defaultValue={user?.displayName} type="text" name="full_name" id="full_name" className="h-10 poppins border mt-1 rounded px-4 w-full bg-gray-50"  />
                                    </div>

                                    <div className="md:col-span-5">
                                        <label className="poppins" htmlFor="email">Email Address</label>
                                        <input defaultValue={user?.email} type="email" name="email" id="email" className="h-10 border mt-1 rounded poppins px-4 w-full bg-gray-50"   />
                                    </div>
                                    <div className="md:col-span-5">
                                        <label className="poppins" htmlFor="image">Photo URL</label>
                                        <input defaultValue={user?.photoURL} type="text" name="image" id="image" className="h-10 border mt-1 poppins rounded px-4 w-full bg-gray-50"   />
                                    </div>

                                    <div className="md:col-span-5 text-right">
                                        <div className="inline-flex mt-2 items-end">
                                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded raleway">Update</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default UpdateProfile;