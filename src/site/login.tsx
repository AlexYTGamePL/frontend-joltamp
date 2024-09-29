import '../styles/login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginSite() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember me:', rememberMe);
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        id='login'
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={handleUsernameChange}
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

                <button type="submit" className="btn">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    );
}
