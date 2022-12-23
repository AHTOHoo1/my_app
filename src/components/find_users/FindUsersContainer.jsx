import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togleIsFetching, unfollow, togleFollowingProgress } from "../../redux/users-reducer";
import Users from './Users';
import React from 'react';
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../API/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.togleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.togleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.togleIsFetching(false);
            this.props.setUsers(data.items);
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
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                togleFollowingProgress={this.props.togleFollowingProgress} />
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const FindUsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togleIsFetching,
    togleFollowingProgress

})(UsersContainer)

export default FindUsersContainer;
