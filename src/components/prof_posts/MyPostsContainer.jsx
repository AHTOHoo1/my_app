import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addPost } from '../../redux/profile_reducer';
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}



export default compose(
    connect(mapStateToProps, {addPost}),
    withAuthRedirect
)(MyPosts);
