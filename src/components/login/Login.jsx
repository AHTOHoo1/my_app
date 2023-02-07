import './login.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControl/FormControl';
import { required } from '../../validators';


const LoginForm = (props) => {    
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder='Login' name={"login"} component={Input} validate={[ required ]} />
            </div>
            <div>
                <Field placeholder='Password' name={"password"} component={Input} validate={[ required ]} />
            </div>
            <div>
                <Field type={'checkbox'} name={"remember_me"} component={Input} /> Remember me?
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;
