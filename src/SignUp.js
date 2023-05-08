import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from './nav';
import './css/style.css';

const SignUp = () => {
    return (
        <div className="signup">
            <h1>Log-In</h1>
            <label for="username">Create a username</label><br />
            <input type="text" placeholder="Username" /><br />
            <label for="Password">Create a password</label><br />
            <input type="password" placeholder="Password" /><br />
        </div>
    );
}

export default SignUp;