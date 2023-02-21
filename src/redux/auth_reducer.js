import { authAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const getUserData = () => {
    return (dispatch) => {
        authAPI.userData().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData())
            }
        })
    }
}


export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}



/*
export const getUserData = () => (dispatch) => {
    authAPI.userData().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login))
        }
    })
}
*/

export default authReducer;
