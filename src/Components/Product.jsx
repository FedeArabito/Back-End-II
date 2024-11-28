import React from 'react'

const Product = ({ product }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4">
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt="Product"
          className="w-full h-full object-fit rounded-t-lg"
        />
      </div>

      <div className="mt-4">
        <h5 className="text-lg font-bold text-gray-800 truncate">
          {product.title}
        </h5>
        <p className="text-sm text-gray-500 mt-1">{product.category} </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-semibold text-blue-600">${product.price}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
