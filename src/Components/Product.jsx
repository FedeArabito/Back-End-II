import React from 'react'

const Product = ({product}) => {
  return (
    <div>
       <div>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
       </div>
        
    </div>
  )
}

export default Product
