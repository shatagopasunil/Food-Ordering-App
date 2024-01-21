import RestaurentCard from '../components/RestaurentCard';
import restaurentData from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
    const [restaurentDataList, setRestaurentDataList] = useState(restaurentData);

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