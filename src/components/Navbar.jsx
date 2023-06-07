import { MenuItem, MenuList, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
//import FriendLink from "./friends/friend_link/FriendLink";

const Navbar = (props) => {

  //let FriendsElements = props.state.friends.map( f => <FriendLink name={f.name} key={f.id} /> ) 

  return (
    <nav className="nav">
    <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
          <Link to={"/profile"} className='nav__link' ><MenuItem color="secondary" ><PersonIcon/>Profile</MenuItem></Link>
          <Link to={"/dialogs"} className='nav__link' ><MenuItem><MailIcon/>Messages</MenuItem></Link>
          <Link to={"/news"} className='nav__link' ><MenuItem><NewspaperIcon/>News</MenuItem></Link>
          <Link to={"/music"} className='nav__link' ><MenuItem><LibraryMusicIcon/>Music</MenuItem></Link>
          <Link to={"/find_users"} className='nav__link' ><MenuItem><SearchIcon/>Find users</MenuItem></Link>
          <Link to={"/settings"} className='nav__link' ><MenuItem><SettingsIcon/>Settings</MenuItem></Link>
          <Link to={"/friends"} className='nav__link' ><MenuItem><GroupIcon/>Friends</MenuItem></Link>
        </MenuList>
      </Paper>
    </Stack>
    </nav>
    
    /*<nav className='nav'>
      <div>
        <Link className='nav__link' to="/profile">Profile</Link>
      </div>
      <div>
        <Link className='nav__link' to="/dialogs">Messages</Link>
      </div>
      <div>
        <Link className='nav__link' to="/news">News</Link>
      </div>
      <div>
        <Link className='nav__link' to="/music">Music</Link>
      </div>
      <div>
        <Link className="nav__link" to='/find_users'>Find users</Link>
      </div>
      <div>
        <Link className='nav__link' to="/settings">Settings</Link>
      </div>
      <div>
        <Link className="nav__link" to='/friends'>Friends</Link>
      </div>
    </nav>*/
  )
}

export default Navbar
