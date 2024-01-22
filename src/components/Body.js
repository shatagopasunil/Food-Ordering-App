import RestaurentCard from '../components/RestaurentCard';
import { useEffect, useState } from 'react';

const Body = () => {
    const [restaurentDataList, setRestaurentDataList] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const restaurentData = await data.json();
        setRestaurentDataList(restaurentData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter-container">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        setRestaurentDataList(restaurentDataList.filter(data => data.info.avgRating >= 4.5));
                    }}
                > 
                Top Rated Restaurents
                </button>
            </div>
            <div className="rest-container">
                {restaurentDataList.map((data) => <RestaurentCard key={data.info.id} data={data} />)}
            </div>
        </div>
    );
}

export default Body;