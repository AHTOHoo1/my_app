import './login.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControl/FormControl';
import { required } from '../../validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Navigate } from 'react-router-dom';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder='Email' name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder='Password' name={"password"} type="password" component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} name={"remember_me"} component={Input} /> Remember me?
            </div>
            { props.error && <div>{props.error}</div> }
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remember_me)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);
