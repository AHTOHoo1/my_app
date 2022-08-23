import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hi, how are you?', likes: 20},
            {id: 2, text: "It's my first post", likes: 15},
        ],
        newPostText: 'itka-kamasutra'
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

export let addPost = () => {
    let newPost  = {
        id: 3,
        text: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}


export default state;