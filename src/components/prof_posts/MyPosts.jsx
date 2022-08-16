import './MyPosts_styles.css'
import Post from './post/post'
import React from 'react'


const MyPosts = (props) => {
    
    let PostsElements = props.posts.map( p => <Post text={p.text} likes={p.likes} /> )

    let newPostElement = React.useRef(null)

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div>
            <div>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea className='text__imput' ref={newPostElement}></textarea>
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
