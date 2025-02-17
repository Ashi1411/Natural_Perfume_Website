import React from "react";
import Navbar from "../Common/Navbar";
import './style.css';
import hero_image from "../images/hero_image.webp"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingDollar, faHeadset, faRotate, faTruckFast} from "@fortawesome/free-solid-svg-icons"
import Category_icon from "../Category_icon";


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <section>
        <div className="hero-section grid grid-cols-2 gap-[80px]">
          <div className="hero-section-content items-center">
            <p className="text-5xl p-4 leading-[1.5]">
            "Fragrance is the poetry of memory, bottled into a moment."
            </p>
            <h1 className="section-hero-heading">Welcome to Perfumora</h1>
            <h1 className="section-hero-title">A Symphony of Natural Scents</h1>
            <p className="section-hero-para p-4">
              <br></br>
              Indulge in the pure essence of nature with Perfumora, where every
              drop is a blend of luxury, elegance, and sustainability. Inspired
              by the world’s finest botanicals, our perfumes are crafted with
              handpicked flowers, rich coffee beans, luscious chocolate, and
              exotic spices to create timeless scents that captivate your soul.
            </p>

            <button className="hero-button">
              View Our Products
            </button>
          </div>
          <div>
            <img src={hero_image} className="w-[600px] h-[400]" alt="Hero Section Image"></img>
          </div>
        </div>
      </section>


      <section className="properties-section">
        <div className="grid grid-cols-4 gap-10">
          <div className="properties-card">
            <div className="property">
              <FontAwesomeIcon icon={faTruckFast} className="properties-icon"/>
            </div>
          
            <div>
              <h1>
                Worldwide Shipping
              </h1>
              <p>
                Order Above $100
              </p>
            </div>
          </div>

          <div className="properties-card grid grid-cols-2">
          <FontAwesomeIcon icon={faRotate} className="properties-icon"/>
            <div>
              <h1>
                Easy 30 Day Returns
              </h1>
              <p>
                Back Returns in 7 Days
              </p>
            </div>
          </div>

          <div className="properties-card grid grid-cols-2">
          <FontAwesomeIcon icon={faHandHoldingDollar} className="properties-icon"/>
            <div>
              <h1>
              Money Back Guarantee
              </h1>
              <p>
              Guarantee With In 30-Days
              </p>
            </div>
          </div>

          <div className="properties-card grid grid-cols-2">
          <FontAwesomeIcon icon={faHeadset} className="properties-icon"/>
            <div>
              <h1>
                Easy Online Support
              </h1>
              <p>
                24/7 Any time support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-[4.2rem] font-[600] p-[4.2rem]">Top Categories</h1>

        
        <div>
          <Category_icon></Category_icon>
        </div>
        
      </section>
      
    </div>
  );
}
