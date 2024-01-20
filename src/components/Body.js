import RestaurentCard from '../components/RestaurentCard';
import restaurentData from '../utils/mockData';

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                {restaurentData.map((data) => <RestaurentCard key={data.info.id} data={data} />)}
            </div>
        </div>
    );
}

export default Body;