import axios from 'axios';
import './findUsers.css';
import userPhoto from '../../assets/images/user_icon.webp'
import React from 'react';

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos : userPhoto} alt='userPhoto' width={50} />
                        </div>
                        <div>
                            {u.followed ? <button className='button' onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
                                : <button className='button' onClick={() => { this.props.follow(u.id) }} >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'},</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}


export default Users;
