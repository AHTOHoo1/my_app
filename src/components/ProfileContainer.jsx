import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { setUserProfile, getUserProfile, getStatus, updateStatus } from '../redux/profile_reducer';
import './../App.css'
import Profile from './Profile';


const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent {...props} params={params}/>
    )
}


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.profileId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    profileId: state.auth.id
});

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfile,
        updateStatus,
        getStatus
    }),
    withRouter,
    withAuthRedirect
    
)(ProfileContainer)
