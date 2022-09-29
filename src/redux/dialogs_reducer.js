const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const MY_MESSAGE = 'my_message'
const OTHER_MESSAGE = 'other_message'


let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = ''
            state.messages.push({ id: 4, text: body, message_class: MY_MESSAGE })
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state
    }

}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})

export default dialogsReducer;
