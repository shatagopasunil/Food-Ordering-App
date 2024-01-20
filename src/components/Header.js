import { APP_LOGO } from '../utils/constants';

const Header = () => {
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={APP_LOGO} alt="LOGO"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
    );
}

export default Header;