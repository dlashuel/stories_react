import React, { Component } from "react";
import './SignUp.css';
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <div className='container-signup'>
                <div className='login-page'>
                    <div className='form'>
                        <form class="register-form">
                            <div className='signup-title'>Sign Up</div>
                            <input type="text" placeholder="name"/>
                            <input type="password" placeholder="password"/>
                            <input type="text" placeholder="email address"/>
                            <button>create</button>
                            <p className="message">Already registered? <Link to='/login'><a href="#">Sign In</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}