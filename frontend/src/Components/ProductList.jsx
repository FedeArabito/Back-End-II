import React from 'react'
import Product from './Product'

const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  )
}

export default ProductList

