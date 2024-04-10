import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div className="min-h-[calc(100vh-337px)] flex justify-center items-center">
            <div className="w-full md:w-4/6 lg:w-3/6 mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-10 space-y-8">
                    <p className="text-4xl text-center font-semibold">Registration your account</p>
                    <p className="text-xl text-center mx-auto md:w-3/4 ">Welcome to our platform! Please fill out the following information to create your account. Your security is our top priority, so please ensure that you provide accurate information.
                    </p>
                </div>
                <form noValidate="" action="" className="space-y-6 bg-[#d17e9b71] ring-1 ring-purple-500 rounded-lg px-10 py-5">
                    <div className="space-y-1 text-lg">
                        <label htmlFor="Text" className="block  dark:text-gray-600">Name</label>
                        <input type="text" id="Text" placeholder="Type Your Email" className="ring-1 focus:ring-2 focus:ring-stone-950 ring-indigo-500 input input-bordered w-full" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="email" className="block  dark:text-gray-600">Email</label>
                        <input type="email" id="email" placeholder="Type Your Email" className="focus:ring-2 focus:ring-stone-950 input ring-1 ring-indigo-500 input-bordered w-full" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="image" className="block dark:text-gray-600">Profile Image </label>
                        <input type="text" id="image" placeholder="Your Image Link" className="input focus:ring-2 focus:ring-stone-950 ring-1 ring-indigo-500 input-bordered w-full" />
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" id="password" placeholder="Type Your Email" className="input focus:ring-2 focus:ring-stone-950 ring-1 ring-indigo-500 input-bordered w-full" />
                    </div>
                    <button type="submit" className="block text-xl font-medium text-white bg-[#4556ebea] hover:text-black hover:bg-[#4652c081] py-4 rounded-xl w-full">Login</button>
                </form>
                <p className="text-lg text-center  sm:px-6 dark:text-gray-600">Already have an account?
                    <Link className="underline font-medium hover:text-blue-400 text-lg" to={'/login'}>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;