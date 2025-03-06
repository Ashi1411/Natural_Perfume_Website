import React from 'react'
import { useLocation } from 'react-router-dom';
import perfumes from './APIs/products';

export default function ProdDetails() {

    let uselocation = useLocation();
    
    let currentId = uselocation.pathname.split('/')[2];
    
    let details = perfumes[currentId-1];
    console.log(details);

  return (
    <div className='prodDetails'>
        <div className="prodDetailsImg">
            <img src={details.image}></img>
        </div>
        <div className='prodDetailsInfo'>
        <h1>{details.name}</h1>
        <p>Ratings : </p>
        <p>{details.description}</p>
        <hr></hr>
        <p>₹{details.price}</p>
        <p>Stock = {details.quantity}</p>

        <div className='grid grid-cols-2'>
            <p>Quantity</p>
        
            <div className='quantity'>
                <button>-</button>
                <button>0</button>
                <button>+</button>
            </div>
        </div>

        <button className='addtocartButton'>
            Add to Cart
        </button>
        </div>
    </div>
  )
}
