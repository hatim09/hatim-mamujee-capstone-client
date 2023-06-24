import './Header.scss'
import logo3 from '../../assets/images/logo3.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {

    const [activeLink, setActiveLink] = useState('Warehouses');

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo-container">
                    <Link to="/">
                        <img className="header__logo" src={logo3} alt="InStock header logo"></img>
                    </Link>
                </div>
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <NavLink to="/"
                                onClick={() => handleNavLinkClick('Warehouses')}
                                className={activeLink === 'Warehouses' ? 'active-link' : 'navbar__navlink'}
                            >
                                View attractions
                            </NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to="/inventory"
                                onClick={() => handleNavLinkClick('Inventory')}
                                className={activeLink === 'Inventory' ? 'active-link' : 'navbar__navlink'}
                            >
                                Bucketlist
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;