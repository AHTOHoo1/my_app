import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserData } from "../redux/auth_reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default compose(
    connect(mapStateToProps, {getUserData})
)(HeaderContainer)
