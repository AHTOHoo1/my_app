import './findUsers.css';
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (props) => {

    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} 
        totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
        {
            props.users.map(u => <User key={u.id} user={u} 
                followingInProgress={props.followingInProgress} 
                follow={props.follow} unfollow={props.unfollow} />
                )
        }
    </div >
}

export default Users;
