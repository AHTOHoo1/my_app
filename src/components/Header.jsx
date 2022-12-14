import './../App.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className='header'>
      <Link to='/profile'><img src='https://cryptologos.cc/logos/aave-aave-logo.png' alt='logo_button' className='header_img' /></Link>
      <div className='login_block'>
        { props.isAuth ? <Link to='#' className='profile_name' >{props.login}</Link> : <Link to='/login' className='login'>Login</Link> }
        
      </div>
    </header>
  )
}

export default Header
