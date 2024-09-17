import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resMenu = useRestaurantMenu(resId);

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