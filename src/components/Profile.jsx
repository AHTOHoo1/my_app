import './../App.css'
import ProfileInfo from './profile_info/Profile_info'
import MyPosts from './prof_posts/MyPosts'

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} 
                addPost={props.addPost} 
                newPostText={props.profilePage.newPostText} 
                updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;
