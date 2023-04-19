import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PROILE_PHOTO';


let initialState = {
    posts: [
        { id: 1, text: 'Hi, how are you?', likes: 20, isLike: false },
        { id: 2, text: "It's my first post", likes: 15, isLike: false },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 3, text: action.text, likes: 0 }]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO: {
            return{
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPost = (text) => ({ type: ADD_POST, text })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

const setStatus = (status) => ({ type: SET_STATUS, status })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

const saveUserPhoto = (photos) => ({type: SAVE_PHOTO, photos})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUser(userId)
        dispatch(setUserProfile(response.data))
    }
}


export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(saveUserPhoto(response.data.data.photos))
    }
}


export default profileReducer;
