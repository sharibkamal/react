import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_URL + resId);
        const json = await data.json();
        setResMenu(json);
    };

    if (resMenu === null) {
        return ( <Shimmer /> );
    }

    const { name, cuisines, avgRating, costForTwoMessage } = resMenu?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price}</li>)
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;