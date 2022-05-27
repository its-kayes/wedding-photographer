import React from 'react';
import "./Footer.css";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer-basic" style={{height: "160px", backgroundColor: '#FFC0CB'}}>
            <footer className=''>
                <div className="social">
                    <a href="https://www.facebook.com/kayes0000000/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/___kayes__/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <p><small className='copyright'>copyright @ {year} </small></p>
            </footer>
        </div>

    );
};

export default Footer;