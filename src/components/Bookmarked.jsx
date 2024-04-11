import { useEffect, useState } from "react";
import Booked from "./Booked";


const Bookmarked = () => {
    const [booked, setBooked] = useState([]);

    useEffect(() => {
        const bookedMarkedData = JSON.parse(localStorage.getItem('bookmarked')) || [];
        setBooked(bookedMarkedData)
    }, [])
    console.log(booked);
    return (
        <div>
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