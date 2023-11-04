import { Link } from 'react-router-dom'
import logo from '../../assets/logo-coffee-delivery.svg'

export function Logo() {
  return (
    <Link to="/" className="flex">
      <img src={logo} alt="Coffee Delivery Logo" />
    </Link>
  )
}
