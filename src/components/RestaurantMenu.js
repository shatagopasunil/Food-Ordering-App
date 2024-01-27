import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const  [ menuData, setMenuData ] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(MENU_URL + params.id);
        const json = await response.json();
        setMenuData(json.data);
    }

    if (menuData === null) return <Shimmer />

    const {name, costForTwoMessage, cuisines} = menuData.cards[0].card.card.info;
    const {itemCards} = menuData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    return (
        <div className="menu">
            <h1> {name} </h1>
            <h3> {cuisines.join(", ")} </h3>
            <h3> {costForTwoMessage} </h3>
            <hr/>
            <h2> Menu </h2>
            {
                itemCards ? 
                itemCards.map(item => <h3 key={item.card.info.id}>{item.card.info.name + " - " + item.card.info.price/100}</h3>)
                : "No Items found"
            }
        </div>
    );
}

export default RestaurantMenu;