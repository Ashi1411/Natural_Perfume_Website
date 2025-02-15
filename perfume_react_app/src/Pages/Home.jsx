import React from "react";
import Navbar from "../Common/Navbar";
import './style.css';
import hero_image from "../images/hero_image.webp"


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


      
    </div>
  );
}
