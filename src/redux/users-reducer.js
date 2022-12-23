
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";
const TOGLE_IS_FOLLOWING_PROGRESS = "TOGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 22,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                    return u;
                } )
            }

        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, 
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.id)
            }
        }
        default:
            return state;
    }
}


export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const togleIsFetching = (isFetching) => ({type: TOGLE_IS_FETCHING, isFetching})
export const togleFollowingProgress = (isFetching, userId) => ({type: TOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default usersReducer
