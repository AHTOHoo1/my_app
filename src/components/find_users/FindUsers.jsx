import axios from 'axios';
import './findUsers.css';
import userPhoto from '../../assets/images/user_icon.webp'

const FindUsers = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
        {getUsers()}
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos : userPhoto} alt='userPhoto' width={50} />
                    </div>
                    <div>
                        {u.followed ? <button className='button' onClick={() => { props.unfollow(u.id) }} >Follow</button>
                            : <button className='button' onClick={() => { props.follow(u.id) }} >Unfollow</button>}
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

export default FindUsers;
