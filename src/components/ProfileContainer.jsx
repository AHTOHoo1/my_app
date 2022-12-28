import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { setUserProfile, getUserProfile } from '../redux/profile_reducer';
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
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login" />;
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
    getUserProfile
}) (WithUrlDataContainerComponent);
