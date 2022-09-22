const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
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

    dispatch(action) {  // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                text: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        else if (action.type === ADD_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push({id: 4, text: body, message_class: MY_MESSAGE});
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state)
        }
    }

}


export const addPostActionCreator = () => ({
        type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})


export default store;
