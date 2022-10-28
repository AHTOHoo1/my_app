import './../App.css'
import ProfileInfo from './profile_info/Profile_info'
import MyPostsContainer from './prof_posts/MyPostsContainer'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
