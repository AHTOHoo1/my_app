import './../App.css'
import ProfileInfo from './profile_info/Profile_info'
import MyPosts from './prof_posts/MyPosts'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;
