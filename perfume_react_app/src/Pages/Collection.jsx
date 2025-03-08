import React from 'react'
import Navbar from '../Common/Navbar'
import { Link } from 'react-router-dom'
import Products from '../Products'
import perfumes from '../APIs/products'
import './style.css';
import Footer from '../Common/Footer'

export default function Collection() {
  return (
    <div>
        <Navbar></Navbar>
        <section>
            <div className='prodclass'>
                <h1>Perfumes</h1>
            </div>
           
           <div className='grid grid-four-cols'>
                {perfumes.map((prod, i) => {
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

        <Footer></Footer>
    </div>
  )
}
