
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        { id: 1, photourl: 'https://www.arlis.umd.edu/sites/default/files/default_images/avatardefault_92824.png', 
        followed: false, fullname: 'Sasha D.', status: 'fuck it', location: { country: 'Moldova', city: 'Kishinev' } },
        { id: 2, photourl: 'https://www.arlis.umd.edu/sites/default/files/default_images/avatardefault_92824.png', 
        followed: true, fullname: 'Vanya B.', status: 'fuck you', location: { country: 'Moldova', city: 'Kishinev' } },
        { id: 3, photourl: 'https://www.arlis.umd.edu/sites/default/files/default_images/avatardefault_92824.png', 
        followed: false, fullname: 'Sasha S.', status: 'i don`t care', location: { country: 'USA', city: 'Texas' } },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                } )
            }

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }

        default:
            return state;
    }
}


export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setusersAC = (users) => ({type: SET_USERS, users})

export default usersReducer
