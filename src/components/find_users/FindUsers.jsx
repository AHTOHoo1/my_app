import './findUsers.css';

const FindUsers = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photourl} alt='userPhoto' width={50} />
                    </div>
                    <div>
                        { u.followed ? <button className='button' onClick={ () => {props.unfollow(u.id)}} >Follow</button>
                        : <button className='button' onClick={ () => {props.follow(u.id)} } >Unfollow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country},</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default FindUsers;
