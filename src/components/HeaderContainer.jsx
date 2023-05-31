import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { logout } from "../redux/auth_reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    ownerPhoto: state.auth.profileOwnerInfo.photos.large
});


export default compose(
    connect(mapStateToProps, { logout })
)(HeaderContainer)
