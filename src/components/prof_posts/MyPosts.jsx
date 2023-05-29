import './MyPosts_styles.css'
import Post from './post/post'
import React from 'react'
import { Field, Form, Formik } from 'formik'

const validatePost = (value) => {
    if (!value) {
        return '☼ Required!';
    } else if (value.length > 30) {
        return 'Max length is 30 simbols(';
    }
}

const MyPosts = React.memo(props => {

    let PostsElements = props.posts
    .map(p => <Post text={p.text} likes={p.likes} key={p.id} />)

    let addNewPost = (values, {resetForm}) => {
        props.addPost(values.post)
        resetForm()
    }


    return (
        <div>
            <div>
                <h2>My posts</h2>
                <div>
                    <Formik initialValues={{ post: "" }} onSubmit={addNewPost}>
                        {({ errors, touched }) => (
                            <Form>
                                <div>
                                    <Field className={errors.post && touched.post ? "text__input_error" : "text__input"}
                                        component="textarea"
                                        name="post"
                                        validate={validatePost}
                                        placeholder='Enter your text' />
                                </div>
                                {errors.post && touched.post && (
                                    <div>{errors.post}</div>
                                )}
                                <div>
                                    <button className='btn'
                                        type='submit'>Add post</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='posts'>
                    {PostsElements}
                </div>
            </div >
        </div >
    )
})

export default MyPosts
