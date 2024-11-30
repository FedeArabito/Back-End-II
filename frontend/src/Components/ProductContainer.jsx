import React, { useEffect, useState } from "react"
import Spinner from "./Spinner"
import ProductList from "./ProductList"
import axios from 'axios'

const ProductContainer = () => {
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await axios.get("http://localhost:5000/api/products");
        console.log("Response:", response);
        setData(response.data);
        setMessage("Funcionó");
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      
      <ProductList data={data} />
    </div>
  );
}

export default ProductContainer

