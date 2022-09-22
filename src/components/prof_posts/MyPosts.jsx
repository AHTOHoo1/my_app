import './MyPosts_styles.css'
import Post from './post/post'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/state'


const MyPosts = (props) => {
    
    let PostsElements = props.posts.map( p => <Post text={p.text} likes={p.likes} /> )


    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
        <div>
            <div>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea className='text__imput' onChange={onPostChange} value={props.newPostText} placeholder='Enter your text'></textarea>
                    </div>
                    <div>
                        <button className='btn' onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <div className='posts'>
                    { PostsElements }
                </div>
            </div >
        </div >
    )
}

export default MyPosts
