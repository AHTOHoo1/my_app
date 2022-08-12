import './MyPosts_styles.css'
import Post from './post/post'


const MyPosts = (props) => {
    
    let PostsElements = props.posts.map( p => <Post text={p.text} likes={p.likes} /> )

    return (
        <div>
            <div>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea className='text__imput'></textarea>
                    </div>
                    <div>
                        <button className='btn'>Add post</button>
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
