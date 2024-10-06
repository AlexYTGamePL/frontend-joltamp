//import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LoginSite() {
    useEffect(() => {
        import('./login.css');
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const [errorData, setErrorData] = useState('');

    const emailValidPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordValidPattern = /^(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]*$/;

    function addErrorClass (target: HTMLInputElement, ifCorrect: boolean){
        if(ifCorrect){

            target.classList.remove("errorClass")
            target.classList.add("noterrorClass")
        }
        else{
            target.classList.add("errorClass");
            target.classList.remove("noterrorClass")
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        const isValid: boolean = emailValidPattern.test(e.target.value) && e.target.value.length > 5;
        addErrorClass(e.target, isValid);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        const isValid: boolean = passwordValidPattern.test(e.target.value) && e.target.value.length > 7;
        addErrorClass(e.target, isValid);
    };

    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(
            emailValidPattern.test(email) && email.length > 5 &&
            passwordValidPattern.test(password) && password.length > 7
        ){
            setErrorData("");
            // axios sends data to backend
        }
        else{
            setErrorData("Error message");
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                    <input
                        id='password'
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="remember-forgot">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <div className='errordata'>
                    <p>{errorData}</p>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                    <p>Don't wanna be here? <a href="/">Kill your self</a></p>
                </div>
                
            </form>
        </div>
    );
}