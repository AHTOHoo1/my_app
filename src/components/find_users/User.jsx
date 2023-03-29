import './findUsers.css';
import userPhoto from '../../assets/images/user_icon.webp'
import React from 'react';
import { Link } from 'react-router-dom';

let User = ({ user, followingInProgress, follow, unfollow}) => {

    return (
        <div>
            <span>
                <div>
                    <Link to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='userPhoto' width={50} className='usrePhoto' />
                    </Link>
                </div>
                <div>
                    {user.followed
                        ? <button className='button' disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)


                        }} >♡ Unfollow</button>
                        : <button className='button' disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)

                        }} >♥ Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div >
    )
}

export default User;
