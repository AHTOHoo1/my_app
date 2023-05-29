import './../App.css'
import { Link, Navigate } from 'react-router-dom'
import LogMenu from './header_dropdown/LogMenu';

const Header = (props) => {
  let logoutProcess = () => {
    props.logout();
    <Navigate to={"/login"} />
  }

  return (
    <header className='header'>
      <Link to='/profile'><img src='https://cryptologos.cc/logos/aave-aave-logo.png' alt='logo_button' className='header_img' /></Link>
      {props.isAuth ? <div className='login_block_autorized' > <LogMenu {...props} logoutProcess={logoutProcess} /> </div>
        : <div className='login_block_guest' ><Link to='/login' className='login'>Sign in</Link></div>}
    </header>
  )
}

export default Header;
