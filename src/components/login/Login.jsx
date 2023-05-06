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
            <div >
                <Field placeholder='Email' name={"email"} component={Input} validate={[required]} className='form__field' />
            </div>
            <div >
                <Field placeholder='Password' name={"password"} type="password" component={Input} validate={[required]} className='form__field' />
            </div>
            <div className='checkbox-wrapper-14'>
                <Field type={'checkbox'} name={"remember_me"} component={Input} className='switch' id="s1-14"/> Remember me?
            </div>
            { props.error && <div>{props.error}</div> }
            { props.captchaUrl && <div><div><img src={props.captchaUrl} alt='login_captcha' /></div>
            <div><Field component={Input} name={'captcha'} placeholder='Captcha' className='form__field' /></div></div> }

            <div>
                <button className='submit__button'>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remember_me, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login })(Login);
