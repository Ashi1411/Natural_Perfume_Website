import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import perfumes from './APIs/products';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import AddToCart from './AddToCart';
import "./extra.css";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import "react-notifications/lib/notifications.css";

export default function ProdDetails() {

    let uselocation = useLocation();
    
    let currentId = uselocation.pathname.split('/')[2];
    
    let details = perfumes[currentId-1];

    let [quantity, setQuantity] = useState(0);

    let setQuant = (event) => {
        if (event.target.innerText === '+'){
            quantity = (quantity === details.quantity )
            ? 
            quantity =  details.quantity
            :
            quantity = quantity + 1
        }
        else{

            quantity = (quantity === 0 )
            ? 
            quantity = 0 
            :
            quantity = quantity - 1
        }
        setQuantity(quantity);
    }
    

  return (
    <div className='prodDetails'>
        <div className="prodDetailsImg">
            <img src={details.image}></img>
        </div>
        <div className='prodDetailsInfo'>
        <h1>{details.name}</h1>
        <p>Ratings : 5 <FontAwesomeIcon className='rating-star' icon={faStar} /></p>
        <p>{details.description}</p>
        <hr></hr>
        <p>₹{details.price}</p>
        <p>Stock = {details.quantity}</p>

        <div className='grid grid-cols-2'>
            <p>Quantity</p>
        
            <div className='quantity'>
                <button onClick={setQuant}
                > - </button>
                <button> {quantity} </button>
                <button onClick={setQuant}
                > + </button>
            </div>
        </div>

        <NotificationContainer></NotificationContainer>
        <button className='addtocartButton' onClick={() => {AddToCart(details, quantity)}}>
            Add to Cart <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className='buyNowButton'>
            <Link to={`/buynow/${currentId}`}>Buy Now</Link>
            
        </button>
        </div>
    </div>
  )
}
