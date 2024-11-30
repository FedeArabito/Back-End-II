import spinner from '../assets/img/spinner.gif'


const Spinner = ({className}) => {

  return (
    <div className={`animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 ${className}`}>
    <img src={spinner} alt="" />
    </div>
  )
}

export default Spinner
