

const ProductContainer = () => {
  
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(()=>{
      setTimeout(()=>{
          setLoading(false)
          setMessage(
            'Funciono'
          )
      }, 5000)
  }, [])


  return (
    <div>
      
      {loading ? <Spinner/> : {message}}

    </div>
  )
}

export default ProductContainer
