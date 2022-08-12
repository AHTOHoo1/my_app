import { Link } from 'react-router-dom';
import './friend_link.css'


const FriendLink = (props) => {
    return (
        <Link to="/#" className="friend_nav_link">
            <div className='friend_link'>
                <div>
                    <img src='https://www.arlis.umd.edu/sites/default/files/default_images/avatardefault_92824.png' alt='friend_ava' className='friend_ava_link' />
                </div>
                <div className='friend_name'>{props.name}</div>
            </div>
        </Link>
    )
}

export default FriendLink;
