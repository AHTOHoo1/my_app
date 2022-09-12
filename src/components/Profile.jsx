import './../App.css'
import ProfileInfo from './profile_info/Profile_info'
import MyPosts from './prof_posts/MyPosts'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;
