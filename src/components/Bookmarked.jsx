import { useEffect, useState } from "react";
import Booked from "./Booked";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const Bookmarked = () => {
    const [booked, setBooked] = useState([]);

    const navigate = useNavigate()
    const goBack = () => [
        navigate('/')
    ]

    useEffect(() => {
        const bookedMarkedData = JSON.parse(localStorage.getItem('bookmarked')) || [];
        setBooked(bookedMarkedData)
    }, [])
    console.log(booked);
    if (booked.length === 0) {
        return <section className="dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title>LivingLane || BookMarked</title>
            </Helmet>
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Ooooooops
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">No bookmarks have been selected. Please select at least one bookmark to view your booking history.</p>
                <div className="flex flex-wrap justify-center">
                    <button onClick={goBack} className="btn btn-outline  m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Get started</button>
                </div>
            </div>
        </section>
    }
    return (
        <div>
            <Helmet>
                <title>LivingLane || BookMarked</title>
            </Helmet>
            {
                booked.map(booked => <Booked
                    key={booked.id}
                    booked={booked}
                ></Booked>)
            }
        </div>
    );
};

export default Bookmarked;