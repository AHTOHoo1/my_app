import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setusersAC, togleIsFetchingAC, unfollowAC } from "../../redux/users-reducer";
import Users from './Users';
import axios from 'axios';
import React from 'react';
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.togleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.togleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.togleIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged} />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        togleIsFetching: (isFetching) => {
            dispatch(togleIsFetchingAC(isFetching))
        }
    }
}

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default FindUsersContainer;


