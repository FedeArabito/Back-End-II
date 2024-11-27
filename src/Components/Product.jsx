import React from 'react'

const Product = ({product}) => {
  return (
    <div className='flex flex-row justify-center items-center border-2 border-black'>
       <div>
        <img src={product.image} alt="" className='max-w-[200px]'/>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
       </div>
        
    </div>
  )
}

export default Product
