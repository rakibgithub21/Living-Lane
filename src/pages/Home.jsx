
import { Helmet } from "react-helmet-async";
import Agent from "../components/Agent";
import Best from "../components/Best";
import Cards from "../components/Cards";
import Slider from "../components/Slider";


const Home = () => {
   
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>LivingLane | Home</title>
            </Helmet>
            
            <Slider></Slider>
            {/* slider */}

            {/* all cards */}
            <Cards></Cards>


            {/* Why Choose us */}
            <Best></Best>

            {/* Our Agents */}
            <Agent></Agent>
        </div>
    );
};

export default Home;