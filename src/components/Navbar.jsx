import { Link } from "react-router-dom";
//import FriendLink from "./friends/friend_link/FriendLink";

const Navbar = (props) => {

  //let FriendsElements = props.state.friends.map( f => <FriendLink name={f.name} key={f.id} /> ) 

  return (
    <nav className='nav'>
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
    </nav>
  )
}

export default Navbar
