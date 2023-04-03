import './NorFound.css';
import error from '../../assets/error.webp'

export default function NotFound() {
  return (
    <div className='container-notfound'>
        <img className='img-error' src={error} alt="Error not found" />
    </div>
  )
}
