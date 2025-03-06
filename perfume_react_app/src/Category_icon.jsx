import React from 'react'
import perfumeCategories from './APIs/categories'
// import ShowProducts from './ShowProducts'
import { Link } from 'react-router-dom'

export default function Category_icon() {
  return (
    <div>
        <div className="grid grid-cols-4 gap-[10rem]">
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
