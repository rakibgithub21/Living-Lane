import logo from '../assets/acquisition_12140441.png'
const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-slate-100 dark:text-gray-800" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                           <img src={logo} alt="" />
                        </div>
                        <span className="self-center text-2xl font-semibold">Livin<span className="text-rose-500 raleway">g</span>Lane</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-5 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3 md:text-lg">
                        <h3 className="tracking-wide uppercase font-medium dark:text-gray-900">Services</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Property Management</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Home Valuation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Real Estate Consultation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Mortgage Assistance</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 md:text-lg">
                        <h3 className="tracking-wide uppercase font-medium dark:text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">About us</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Contact</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Customer Support</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="space-y-3 md:text-lg">
                        <h3 className="uppercase font-medium dark:text-gray-900">Legal</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of use</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy policy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Cookie policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-6 text-lg text-center dark:text-gray-600">© 2024 Company Co. All rights reserved.</div>
        </footer>


    );
};

export default Footer;