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
                { id: 1, text: 'hey, whats up my nigga', message_class: 'my_message' },
                { id: 2, text: 'how are you', message_class: 'other_message' },
                { id: 3, text: 'yo', message_class: 'my_message' }
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


    addMessage() {
        let newMessage = {
            id: 4,
            text: this._state.dialogsPage.newMessageText,
            message_class: 'my_message'
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },

    dispatch(action) {  // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                text: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }

}



export default store;