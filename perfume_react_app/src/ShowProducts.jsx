import React from 'react'
import perfumes from './APIs/products'
import perfumeCategories from './APIs/categories';

export default function ShowProducts(i) {
  return (
    <div> 
        <ProductItem i={i}></ProductItem>
    </div>
  )
}

function ProductItem({i}){
    return(
        <div>
            {alert(perfumeCategories[i])}
        </div>
    )
}
