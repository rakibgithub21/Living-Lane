// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from "../components/Footer";
// ..
AOS.init();
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;