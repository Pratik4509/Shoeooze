import React from 'react';
import './TopBrands.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet, Link } from "react-router-dom";


AOS.init();

const TopBrands = () => ( 
    <div className="outer item" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="brand-text">Top Brands</div>
        <div className="brand-container">
        <Link to={`/${'nike'}`}><img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="nike" /></Link>
        <Link to={`/${'adidas'}`}><img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="adidas" /></Link>
        <Link to={`/${'puma'}`}><img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" alt="puma" /></Link>
        <Link to={`/${'asics'}`}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Asics_Logo.svg" alt="asics" /></Link>
        </div>
        {/* <div className="item" data-aos="fade-up" data-aos-anchor-placement="top-center">fade-up</div> */}
        <Outlet />
    </div>
);

export default TopBrands;