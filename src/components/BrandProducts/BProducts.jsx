import React from 'react';
import './BProducts.css';
import { getNikeData } from "./../../routes/data";
import AOS from 'aos';
import 'aos/dist/aos.css';

let nikeData = getNikeData();

const BProducts = ({props}) => ( 
    
    <>
        <div className="brand-head " data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="nike" />
            </div>
            <p>{props}</p>
        </div>
        <div className="card-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        {nikeData.map((data) => (

        <div className="card">
            <div className="img-container">
            <img src={data.img} alt={data.name} />

            </div>
            <div className="price">${data.price}</div>
            <p className="product-name">{data.name}</p>
            <p className="description">{data.description}</p>
        </div>
        
        ))}
        <button> Top</button>
        </div>
    </>
);

export default BProducts;