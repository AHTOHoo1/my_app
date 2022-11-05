import './findUsers.css';

const FindUsers = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photourl: 'https://www.arlis.umd.edu/sites/default/files/default_images/avatardefault_92824.png',
                followed: false, fullname: 'Sasha D.', status: 'fuck it', location: { country: 'Moldova', city: 'Kishinev' }
            },
            {
                id: 2, photourl: 'https://www.arlis.umd.edu/sites/default/files/default_images/avatardefault_92824.png',
                followed: true, fullname: 'Vanya B.', status: 'fuck you', location: { country: 'Moldova', city: 'Kishinev' }
            },
            {
                id: 3, photourl: 'https://www.arlis.umd.edu/sites/default/files/default_images/avatardefault_92824.png',
                followed: false, fullname: 'Sasha S.', status: 'i don`t care', location: { country: 'USA', city: 'Texas' }
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photourl} alt='userPhoto' width={50} />
                    </div>
                    <div>
                        {u.followed ? <button className='button' onClick={() => { props.unfollow(u.id) }} >Follow</button>
                            : <button className='button' onClick={() => { props.follow(u.id) }} >Unfollow</button>}
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
