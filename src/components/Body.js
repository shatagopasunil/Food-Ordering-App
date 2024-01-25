import RestaurentCard from '../components/RestaurentCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';

const Body = () => {
    const [restaurentDataList, setRestaurentDataList] = useState([]);
    const [initialRestaurentList, setInitialRestaurentList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const restaurentData = await data.json();
        const restaurantList = restaurentData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurentDataList(restaurantList);
        setInitialRestaurentList(restaurantList);
    }

    return (initialRestaurentList.length === 0) ? 
    <Shimmer /> : 
    (
        <div className="body">
            <input type="text" className="search-text" placeholder="Search" onChange={(e) => {
                setSearchText(e.target.value);
            }}></input>
            <button className="filter-btn" onClick={() => {
                const filteredList = initialRestaurentList
                        .filter(data => data.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setRestaurentDataList(filteredList);
            }}>Submit</button>
            <button 
                className="filter-btn" 
                onClick={() => {
                    setRestaurentDataList(initialRestaurentList);
                }}
            > Show All Restaurants </button>
            <button 
                className="filter-btn" 
                onClick={() => {
                   setRestaurentDataList(initialRestaurentList.filter(data => data.info.avgRating >= 4.5));
                }}
            > 
            Top Rated Restaurents
            </button>
            <div className="rest-container">
                {restaurentDataList.map((data) => <RestaurentCard key={data.info.id} data={data} />)}
            </div>
        </div>
    );
}

export default Body;