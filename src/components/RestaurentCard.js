import { CND_LINK } from '../utils/constants';

const RestaurentCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = props?.data?.info;
    return (
        <div className="rest-card">
            <img width="100%" src={CND_LINK + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default RestaurentCard;