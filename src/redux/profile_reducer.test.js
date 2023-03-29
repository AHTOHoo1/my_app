import profileReducer, { deletePost } from './profile_reducer'


let state = {
    posts: [
        { id: 1, text: 'Hi, how are you?', likes: 20 },
        { id: 2, text: "It's my first post", likes: 15 },
    ],
    profile: null,
    status: ''
}

it('after deleting chto to tam udalitsya', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
})
