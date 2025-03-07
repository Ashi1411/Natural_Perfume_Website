import React from 'react'
import Navbar from './Common/Navbar'
import perfumes from './APIs/products';
import "./extra.css";
import Remove from './Remove';

export default function Cart() {
    let storedCart = localStorage.getItem("addToCart");
    let listLocalStorage = storedCart ? JSON.parse(storedCart) : [];
    listLocalStorage = [...listLocalStorage];


    let filterProducts = perfumes.filter((v, i) => {
        return listLocalStorage.some((curElem) => curElem.id === v.id);
    })
    

  return ( 
    <div>
        <Navbar></Navbar>

        {filterProducts.map((prod, i) => {
            return(
                <div className='grid grid-cols-7 cart'>
                    <div>
                    <p className='font-[600]'>Categories</p>
                        {prod.categories.map((cat, i) => {
                            return (
                                <div className='categories'>
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
                        <button className='font-[600] remove-btn' onClick={Remove}>
                            Remove
                        </button>
                    </div>
                </div>
            )
        })}

    </div>
  )
}
