import {authAPI, profileAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';
const SET_OWNER_INFO = 'auth/SET_OWNER_INFO'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // if null, then captcha is not required
    profileOwnerInfo: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case SET_OWNER_INFO:
            return {
                ...state,
                profileOwnerInfo: action.info
            }
        default:
            return state;
    }
}


const setOwnerInfo = (info) => ({type: SET_OWNER_INFO, info})

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {id, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const getUserData = () => async (dispatch) => {
    let response = await authAPI.userData();
    
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        let responseForProfile = await profileAPI.getUser(id);
        dispatch(setAuthUserData(id, email, login, true));
        dispatch(setOwnerInfo(responseForProfile.data))
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        // success, get auth data
        dispatch(getUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}



export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;