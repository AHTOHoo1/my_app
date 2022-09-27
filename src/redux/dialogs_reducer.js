const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const MY_MESSAGE = 'my_message'


const dialogsReducer = (state, action) => {

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
