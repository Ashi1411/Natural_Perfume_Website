import React from "react";
import Navbar from "../Common/Navbar";
import './style.css';
import hero_image from "../images/hero_image.webp"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingDollar, faHeadset, faRotate, faTruckFast} from "@fortawesome/free-solid-svg-icons"
import Category_icon from "../Category_icon";
import reviews from "../APIs/reviews";
import brands from "../APIs/brands";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";



export default function Home() {

  if (!localStorage.getItem("addToCart")){
    localStorage.setItem("addToCart", []);
  }
  
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

            <Link to={'/collection'}>
            <button className="hero-button">
            View Our Products
            </button>
            </Link>
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

      <section>
        <h1 className="text-[4.2rem] font-[600] p-[4.2rem]">Customer Reviews</h1>
        <div className="grid grid-cols-2">
          {reviews.map((v, i) => {
            return (
              <div key={i} className="review-card">
                <h1 className="text-[3.2rem] font-[500]">{v.customerName}</h1>
                <p className="text-[2.4rem] p-[2rem]">{v.review}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <h1 className="text-[4.2rem] font-[600] p-[4.2rem]">Our Top Brands</h1>
        <div className="grid grid-cols-4 gap-[5rem]">
          {
            brands.map((v, i) => {
              return(
                <div key={i} className="brands-card">
                  <img src={v.image}></img>
                  <p>{v.brand}</p>
                </div>
              )
            })
          }
        </div>
      </section>

      {/* <footer>
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
      </footer> */}
      <Footer></Footer>
      
    </div>
  );
}
