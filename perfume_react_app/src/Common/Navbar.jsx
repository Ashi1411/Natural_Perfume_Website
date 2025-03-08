import React from 'react'
import './navbar.css';
import weblogo from "../images/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className='navbar grid grid-cols-2  bg-[#b388eb]'>
            <div>
            <a href='#'>
                <Link to={'/'}><img src={weblogo} className='rounded-[20px]' alt='Perfumora logo'></img></Link>
            </a>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-10 p-8 font-playfair'>
                        <li className='nav-items'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to={'/about-us'}>About-Us</Link>
                        </li>
                        <li className='nav-items'>
                        <Link to={'/collection'}>Collection</Link>
                        </li>
                        <li className='nav-items'>
                            <a href='#'>Contact-Us</a>
                        </li>
                        <li className='nav-items cartItems'>
                             <Link to={"/cart"}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
