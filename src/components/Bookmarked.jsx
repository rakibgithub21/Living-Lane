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
        return <section className="dark:bg-gray-100 dark:text-gray-800 bg-gradient-to-b from-slate-300 to-
        bg-slate-50">
            <Helmet>
                <title>LivingLane || BookMarked</title>
            </Helmet>
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Ooooooops
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg font-medium">No bookmarks have been selected. Please select at least one bookmark to view your booking history.</p>
                <div className="text-start mb-10 raleway border p-2 bg-white shadow-2xl rounded-2xl">
                    <p className="font-medium underline mb-2">Note:Follow this step </p>
                    <p>Click Get Started Button</p>
                    <p>Choose any of card and click view property button</p>
                    <p>Now see above of the agent photo</p>
                    <p>Now cpcked on the bookmarked icon.</p>
                </div>
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