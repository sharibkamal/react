import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6340367&lng=88.376133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (!onlineStatus) {
        return "You are offline. No internet conection";
    }

    //conditional rendering
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                    className="search-box"
                    type="text"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button
                    className="search-btn"
                    onClick={() => {
                        const filteredRes = listOfRestaurants.filter(
                            res => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRes);
                    }}
                    >
                    Search
                    </button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            res => res.info.avgRating > 4.4
                        );
                        setFilteredRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map(
                        res => <Link className="text-link" key={res.info.id} to={"/restaurants/" + res.info.id}><RestaurantCard resData={res}/></Link>
                    )
                }
            </div>
        </div>
    );
};

export default Body;