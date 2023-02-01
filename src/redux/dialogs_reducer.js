const ADD_MESSAGE = 'ADD_MESSAGE'
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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 4, text: action.newMessageBody, message_class: MY_MESSAGE }]
            };
        default:
            return state;
    }
}


export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})


export default dialogsReducer;
