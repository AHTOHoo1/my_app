import dialogsReducer from "./dialogs_reducer"
import navbarReducer from "./navbar_reducer"
import profileReducer from "./profile_reducer"


const MY_MESSAGE = 'my_message'
const OTHER_MESSAGE = 'other_message'


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: 'Hi, how are you?', likes: 20 },
                { id: 2, text: "It's my first post", likes: 15 },
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                { id: 1, friend: 'Gergunchik' },
                { id: 2, friend: 'Glebik' },
                { id: 3, friend: 'Timurchik' }
            ],
            messages: [
                { id: 1, text: 'hey, whats up my nigga', message_class: MY_MESSAGE },
                { id: 2, text: 'how are you', message_class: OTHER_MESSAGE },
                { id: 3, text: 'yo', message_class: MY_MESSAGE }
            ],
            newMessageText: ''
        },

        navbar: {
            friends: [
                { name: 'Gergunchik' },
                { name: 'Gleb' },
                { name: 'Timur' }
            ],
        },
    },

    _callSubscriber() {

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }



}




export default store;
