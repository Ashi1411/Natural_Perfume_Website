import React from 'react'
import perfumeCategories from './APIs/categories'

export default function Category_icon() {
  return (
    <div>
        <div className="grid grid-cols-4 gap-[10rem]">
            {perfumeCategories.map((v, i) => {
                return (
                    <div key={i} className="product-categories">
                        <img src={v.image}></img>
                        <p>{v.category}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
