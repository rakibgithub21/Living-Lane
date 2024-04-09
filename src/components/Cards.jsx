import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
            {
                cardData.map(card => <Card
                    key={card.id}
                    card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;