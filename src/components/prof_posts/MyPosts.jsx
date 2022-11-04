import './MyPosts_styles.css'
import Post from './post/post'
import React from 'react'


const MyPosts = (props) => {

    let PostsElements = props.posts.map(p => <Post text={p.text} likes={p.likes} key={p.id} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div>
            <div>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea className='text__imput'
                            onChange={onPostChange}
                            value={props.newPostText}
                            ref={newPostElement}
                            placeholder='Enter your text'></textarea>
                    </div>
                    <div>
                        <button className='btn'
                            onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className='posts'>
                    {PostsElements}
                </div>
            </div >
        </div >
    )
}

export default MyPosts
