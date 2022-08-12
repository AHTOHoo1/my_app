let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hi, how are you?', likes: 20},
            {id: 2, text: "It's my first post", likes: 15},
        ],
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
    },

    navbar: {
        friends: [
            {name: 'Gergunchik'},
            {name: 'Gleb'},
            {name: 'Timur'}
        ],
    },
}

export default state;