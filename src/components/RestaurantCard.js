import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo} = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={ IMG_URL + cloudinaryImageId }
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;