import React, { Component } from "react";
import './Login.css';
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className='container-login'>
                <div className='login-page'>
                    <div className='form'>
                        <form class="login-form">
                            <div className='login-title'>Login</div>
                            <input type="text" placeholder="username"/>
                            <input type="password" placeholder="password"/>
                            <button>login</button>
                            <p className="message">Not registered? <Link to="/signup"><a href="#">Create an account</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

