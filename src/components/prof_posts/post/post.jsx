import './post_style.css'

const Post = (props) => {

    return (
        <div>
            <div className='post__item'>
                <img src='https://cdn-icons-png.flaticon.com/512/1053/1053244.png' alt='avatarka' className='post__ava' />
                <div className='post__text'>{ props.text }</div>
                <div>
                    <button className='like__btn'>
                        <img src='https://cdn-icons-png.flaticon.com/512/57/57602.png' alt='like_img' className='like__img'/>
                        <span>{ props.likes }</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post;
