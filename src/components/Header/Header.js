import './Header.scss'
import logo3 from '../../assets/images/logo3.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../UserContext';



const Header = () => {

    const [activeLink, setActiveLink] = useState('Attractions');


    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo-container">
                    <Link to="/">
                        <img className="header__logo" src={logo3} alt="Wanderlust header logo"></img>
                    </Link>
                </div>
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <NavLink to="/attractions"
                                onClick={() => handleNavLinkClick('Attractions')}
                                className={activeLink === 'Attractions' ? 'active-link' : 'navbar__navlink'}
                            >
                                View attractions
                            </NavLink>
                        </li>
                        <li className="navbar__item">
                            <NavLink to="/bucketlist"
                                onClick={() => handleNavLinkClick('Bucketlist')}
                                className={activeLink === 'Bucketlist' ? 'active-link' : 'navbar__navlink'}
                            >
                                Bucket list
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
};

export default Header;