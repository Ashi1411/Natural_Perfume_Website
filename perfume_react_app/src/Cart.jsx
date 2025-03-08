import React, { useEffect, useState } from 'react'
import Navbar from './Common/Navbar'
import perfumes from './APIs/products';
import "./extra.css";
import Remove from './Remove';

export default function Cart() {

    

    const [cartItems, setCartItems] = useState([]);

    // let storedCart = localStorage.getItem("addToCart");
    // let listLocalStorage = storedCart ? JSON.parse(storedCart) : [];
    // listLocalStorage = [...listLocalStorage];

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


    // let filterProducts = perfumes.filter((v, i) => {
    //     return listLocalStorage.some((curElem) => curElem.id === v.id);
    // })

    let handleRemove = (id) => {
        Remove(id, setCartItems)
    }
    

  return ( 
    <div>
        <Navbar></Navbar>

        {filterProducts.map((prod, i) => {
            return(
                <div key={i} className='grid grid-cols-7 cart'>
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
                        <p>{prod.price}</p>
                        <p>Total Price : {prod.price * prod.quantity}</p>
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
            )
        })}

    </div>
  )
}
