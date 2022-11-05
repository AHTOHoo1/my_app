import { connect } from "react-redux";
import { followAC, setusersAC, unfollowAC } from "../../redux/users-reducer";
import FindUsers from "./FindUsers";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setusersAC(users))
        }
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer;

