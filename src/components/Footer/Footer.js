import './Footer.scss';
import { Link } from 'react-router-dom';
import facebook from '../../assets/images/icon-facebook.png';
import instagram from '../../assets/images/icon-instagram.png';
import twitter from '../../assets/images/icon-twitter.png';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h3 className="footer__heading">Contact</h3>
                    <p className="footer__subtitle">Email</p>
                    <a className="footer__link" href="mailto:info@wanderlust.com">info@wanderlust.com</a>
                </div>
                <div className="footer__section">
                    <h3 className="footer__heading">Social</h3>
                    <div className="footer__social-links">
                        <Link to="https://www.instagram.com"><img className="footer__social-icon" src={facebook} alt="Instagram icon" /></Link>
                        <Link to="https://www.facebook.com"><img className="footer__social-icon" src={instagram} alt="Facebook icon" /></Link>
                        <Link to="https://www.twitter.com"><img className="footer__social-icon" src={twitter} alt="Twitter icon" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;