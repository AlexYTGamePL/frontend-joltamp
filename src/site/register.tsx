import '../styles/register.css'
import { Link } from 'react-router-dom';

export default function RegisterSite() {
    
    return(
        <div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required /><i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required/><i className='bx bxs-lock-alt' ></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Repeat Password" required/><i className='bx bxs-lock-alt' ></i>
            </div>

            
            <div className="remember-forgot">
                <label><input type="checkbox" /> Remember me </label>
            </div>

            <button type="submit" className="btn">Login</button>

            <div className="register-link">
                <p>Have an account? <Link to="/login">Register</Link></p>

            </div>
        </form>
        
    </div>
    )
}