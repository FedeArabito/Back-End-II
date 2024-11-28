
import Product from './Product.jsx'

const ProductList = ({data}) => {
  return (
    <div className='flex justify-center items-center' >
    <div className='grid grid-cols-4 gap-4 mt-10 '>
      {data.map((product) => <Product key={product.id} product={product} />)}
    </div>
    </div>
  )
}

export default ProductList
