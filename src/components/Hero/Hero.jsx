import React from 'react';
import './Hero.css';
import heroImage from '../../images/hero.jpg';

const Hero = () => ( 
    <>
        <div className="hero-container animate__animated " >
            <div className="hero-text animate__animated ">
                <p className="one animate__animated animate__fadeInUp">SUMMER 2022</p>
                <p className="two animate__animated animate__fadeInUp"> NEW COLLECTION</p>
                <p className="three animate__animated animate__fadeInUp">We know how large objects will act, 
                    but things on a small scale.</p>
                <div >
                    <button className="animate__animated animate__fadeInUp">SHOP NOW</button>
                </div>
            </div>
            <img src={heroImage} alt="heroImage" className="animate__animated animate__fadeIn" />
        </div>
        <div className="arrow-1 animate__animated animate__fadeInUp"></div>
        <div className="arrow-2 animate__animated animate__fadeInUp"></div>
    </>
);

export default Hero;