import { useEffect, useState } from "react"
import Spinner from "./Spinner.jsx"
import ProductList from "./ProductList.jsx"

const ProductContainer = () => {
  
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [data, setData] = useState([{}])
  const [error, setError] = useState('')

  useEffect(()=>{
    /**
     * Fetches the data from the API and stores it in the component's state.
     * If the fetch fails, it sets the error state.
     */
    const fetchData = async () => {
      try {
        // Fetch the data from the API
        const response = await fetch('https://fakestoreapi.com/products')
        // Parse the response as JSON
        const json = await response.json()
        
        // Store the data in the component's state
        setData(json)
      } catch (error) {
        // If the fetch fails, set the error state
        setError(error)
      }
    }
    fetchData();    
      setTimeout(()=>{
          setLoading(false)
          setMessage(
            'Funciono'
          )
      }, 5000)
  }, [])


  return (
    <div>
      
      {loading ? <Spinner classname="absolute top-1 left-1 flex justify-center items-center"/> : <ProductList data={data}/>};
      

    </div>
  )
}

export default ProductContainer
