import React from 'react'
import './navbar.css';
import weblogo from "../images/logo.png"

export default function Navbar() {
  return (
    <div>
        <div className='navbar grid grid-cols-2  bg-[#b388eb]'>
            <div>
            <a href='#'>
                <img src={weblogo} className='rounded-[20px]' alt='Perfumora logo'></img>
            </a>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-10 p-8 font-playfair'>
                        <li className='nav-items'>
                            <a href='#'>Home</a>
                        </li>
                        <li className='nav-items'>
                            <a href='#'>About-Us</a>
                        </li>
                        <li className='nav-items'>
                            <a href='#'>Collections</a>
                        </li>
                        <li className='nav-items'>
                            <a href='#'>Contact-Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
