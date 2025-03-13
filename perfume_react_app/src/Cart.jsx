import React, { useEffect, useState } from 'react'
import Navbar from './Common/Navbar'
import perfumes from './APIs/products';
import "./extra.css";
import Remove from './Remove';


export default function Cart() {

    

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        let storedCart = localStorage.getItem("addToCart");
        setCartItems(storedCart ? JSON.parse(storedCart) : []);
    }, []);

    let filterProducts = cartItems.filter((v) => 
        perfumes.some((curElem) => {
            if(curElem.id === v.id){
                return v
            }})
    );

    let totalPrice = filterProducts.reduce((accum, v) => {
        return accum + (v.quantity * v.price);
    }, 0)


    

    let handleRemove = (id) => {
        Remove(id, setCartItems)
    }
    

  return ( 
    <div>
        <Navbar></Navbar>

        {filterProducts.map((prod, i) => {
            return(
                <div className='cart-responsive'>
                    <div key={i} className='grid grid-seven-cols cart'>
                        <div>
                        <p className='font-[600]'>Categories</p>
                            {prod.categories.map((cat, i) => {
                                return (
                                    <div key={i} className='categories'>
                                        <p>{cat}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <img src={prod.image}></img>
                        </div>
                        <div>
                            <p className='font-[600]'>{prod.name}</p>
                        </div>   
                        <div> 
                            <p>{prod.quantity}</p>
                        </div>
                        <div>
                            <p>₹{prod.price}</p>
                            <p>Total Price : ₹{(prod.price * prod.quantity).toFixed(2)}</p>
                        </div>
                        <div className='quantity'>
                            <button> - </button>
                            <button className='font-[600]'> {prod.quantity} </button>
                            <button> + </button>
                        </div>
                        <div>
                            <button className='font-[600] remove-btn' onClick={() => handleRemove(prod.id)}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )
        })}

        <div className='totalBill'>
            <p>Sub Total : ₹{(totalPrice).toFixed(2)}</p>
            <p>Tax : ₹{(totalPrice * 0.05).toFixed(2)}</p>
            <p className='totalPrice'>Total Price : ₹{(totalPrice + totalPrice * 0.05).toFixed(2)}</p>
        </div>

    </div>
  )
}
