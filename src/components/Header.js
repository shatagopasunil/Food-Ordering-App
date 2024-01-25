import { APP_LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={APP_LOGO} alt="LOGO"/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </div>
    </div>
    );
}

export default Header;