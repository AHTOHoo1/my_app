import './findUsers.css';
import userPhoto from '../../assets/images/user_icon.webp'
import React from 'react';
import { Link } from 'react-router-dom';
import { followAPI } from '../../API/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div >
            {pages.map(p => {
                return <span className={props.currentPage === p && 'selected__page'}
                    onClick={(e) => { props.onPageChanged(p); }} >{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <Link to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='userPhoto' width={50} className='usrePhoto' />
                        </Link>
                    </div>
                    <div>
                        {u.followed
                            ? <button className='button' disabled={props.followingInProgress.some( id => id === u.id )} onClick={() => {
                                props.togleFollowingProgress(true, u.id)
                                followAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.togleFollowingProgress(false, u.id)
                                })


                            }} >♡ Unfollow</button>
                            : <button className='button' disabled={props.followingInProgress.some( id => id === u.id )} onClick={() => {
                                props.togleFollowingProgress(true, u.id)
                                followAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.togleFollowingProgress(false, u.id)
                                })

                            }} >♥ Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
            </div >)
        }
    </div >
}

export default Users;
