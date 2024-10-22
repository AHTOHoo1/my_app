import { connect } from "react-redux";
import { togleFollowingProgress, getUsers, follow, unfollow } from "../../redux/users-reducer";
import Users from './Users';
import React from 'react';
import Preloader from "../common/preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuper } from "../../redux/users_selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
        
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress} />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}




export default compose(
    connect(mapStateToProps, {
        togleFollowingProgress,
        getUsers,
        follow,
        unfollow
    
    }),
    withAuthRedirect
)(UsersContainer)
