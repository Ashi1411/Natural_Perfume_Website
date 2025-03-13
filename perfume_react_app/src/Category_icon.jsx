import React from 'react'
import "./extra.css";
import perfumeCategories from './APIs/categories'
import { Link } from 'react-router-dom'

export default function Category_icon() {
  return (
    <div className='category'>
        <div className="grid grid-four-cols gap-[6rem]">
            {perfumeCategories.map((v, i) => {
                return (
                    <div key={i} className="product-categories">
                        <Link to={`/products/${i}`}>
                        <img src={v.image}></img>
                        <p>{v.category}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
