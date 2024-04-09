import Agent from "../components/Agent";
import Best from "../components/Best";
import Cards from "../components/Cards";


const Home = () => {
    return (
        <div className="container mx-auto">
            <h3>This is home page</h3>
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