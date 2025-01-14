import './../App.css'
import { Link, Navigate } from 'react-router-dom'
import LogMenu from './header_dropdown/LogMenu';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = (props) => {
  let logoutProcess = () => {
    props.logout();
    <Navigate to={"/login"} />
  }

  return (
    <header className='header' >
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: '#1d1d1d', borderRadius: '5px'}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/profile'><img src='https://cryptologos.cc/logos/aave-aave-logo.png' alt='logo_button' className='header_img' /></Link>
          </Typography>
          {props.isAuth ? <LogMenu {...props} logoutProcess={logoutProcess} /> 
        : <Link to='/login' className='login'>Sign in</Link>}
        </Toolbar>
      </AppBar>
    </Box>
    </header>

  )
}

export default Header;

/*<header className='header'>
      <Link to='/profile'><img src='https://cryptologos.cc/logos/aave-aave-logo.png' alt='logo_button' className='header_img' /></Link>
      {props.isAuth ? <div className='login_block_autorized' > <LogMenu {...props} logoutProcess={logoutProcess} /> </div>
        : <div className='login_block_guest' ><Link to='/login' className='login'>Sign in</Link></div>}
    </header>*/
