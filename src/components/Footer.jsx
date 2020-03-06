import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer__left col-md-5">
 <h4>Music-Store</h4>
                        <p>© 2020 - <a href="/">Licence</a> -
                            Designed &amp; Developed by <a href="/">Burdin Aleksandr</a></p>
                    </div>
                    <div className="footer__right col-md-7">
                        <ul className="footer-nav">
                            <li><Link to="/about_us">О нас</Link></li>
                            <li><Link to="/delivery">Доставка</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                            <li><Link to="/repairs">Ремонт наушников</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;