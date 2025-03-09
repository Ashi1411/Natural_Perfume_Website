import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import perfumeCategories from './APIs/categories';
import perfumes from './APIs/products';
import Navbar from './Common/Navbar';
import "./extra.css";

export default function Products() {

    let uselocation = useLocation();
    
    let currentId = uselocation.pathname.split('/')[2];
    
    let cat = perfumeCategories[currentId].category;

    let products = perfumes.filter((prod, i) => {
        return prod.categories.includes(cat)
      })


  return (
    <div>
        <Navbar></Navbar>
        <section>
            <div className='prodclass'>
                <h1>{cat} Perfumes</h1>
            </div>
           
           <div className='grid grid-four-cols'>
                {products.map((prod, i) => {
                    return(
                        <div key={i} className='prodCard'>
                            <div className='prodCardImg'>
                                <img src={prod.image}></img>
                            </div>
                            
                            <div className='prodCardInfo'>
                                <h1>{prod.name}</h1>
                                <p>{prod.description}</p>
                                <p>Price = ₹{prod.price}</p>
                                <p>Stock = {prod.quantity}</p>
            

                                <button><Link to={`/prodDetails/${prod.id}`}>View More </Link></button>
                            </div>
                        </div>
                    )
                })}

                
           </div>
        </section>
    </div>
  )
}
