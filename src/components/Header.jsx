import './../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
          <Link to='/profile'><img src='https://cryptologos.cc/logos/aave-aave-logo.png' alt='logo_button' /></Link>
        </header>
    )
}

export default Header
