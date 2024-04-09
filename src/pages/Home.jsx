import Agent from "../components/Agent";
import Cards from "../components/Cards";


const Home = () => {
    return (
        <div className="container mx-auto">
            <h3>This is home page</h3>
            {/* slider */}

            {/* all cards */}
            <Cards></Cards>

            {/* Our Agents */}
            <Agent></Agent>
        </div>
    );
};

export default Home;