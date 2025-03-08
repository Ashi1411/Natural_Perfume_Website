import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import perfumeCategories from '../APIs/categories';
import weblogo from "../images/logo.png"
import brands from '../APIs/brands';


export default function Footer() {
  return (
    <div>
        <footer>
        <div className="footer-class grid grid-cols-4 gap-[10rem] bg-[#464545] mt-[30rem]">
          <div>
            <img src={weblogo}></img>
            <p>Welcome to Perfumora! Symphony of Natural Scents</p>
            <div className="grid grid-cols-3">
            <FontAwesomeIcon icon={faYoutube} className="footer-icons"/>
            <FontAwesomeIcon icon={faInstagram} className="footer-icons"/>
            <FontAwesomeIcon icon={faFacebook} className="footer-icons"/>
            </div>
          </div>

          <div>
            <h1 className="text-[2.4rem] font-[600] p-[2.1rem] text-white">Categories</h1>
            {perfumeCategories.map((v, i) => {
                return (
                    <div key={i}>
                        <p>{v.category}</p>
                    </div>
                )
            })}
          </div>

          <div>
            <h1 className="text-[2.4rem] font-[600] p-[2.1rem] text-white">Top Brands</h1>
            {brands.map((v, i) => {
                return(
                  <div key={i} >
                    <p>{v.brand}</p>
                  </div>
                )
              })
            }
            </div>

            <div>
            <h1 className="text-[2.4rem] font-[600] p-[2.1rem] text-white">Quick Links</h1>
              <ul className="quick-links">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Return & Refund Policy</li>
                <li>Become An Affiliate</li>
                <li>Shipping policy</li>
              </ul>
            </div>
        </div>
      </footer>
    </div>
  )
}
