import './MyPosts_styles.css'
import Post from './post/post'
import React from 'react'
import { Field, Form, Formik } from 'formik'


const MyPosts = (props) => {

    let PostsElements = props.posts.map(p => <Post text={p.text} likes={p.likes} key={p.id} />)

    let addNewPost = (values) => {
        props.addPost(values.post)
    }

    return (
        <div>
            <div>
                <h2>My posts</h2>
                <div>
                    <Formik initialValues={{ post: "" }} onSubmit={addNewPost}>
                        <Form>
                            <div>
                                <Field className='text__imput'
                                    component="textarea"
                                    name="post"
                                    placeholder='Enter your text' />
                            </div>
                            <div>
                                <button className='btn'
                                    type='submit'>Add post</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className='posts'>
                    {PostsElements}
                </div>
            </div >
        </div >
    )
}

export default MyPosts
