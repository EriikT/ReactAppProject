import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <>
            <div className='login-container'>
                <div className='login-logo'>LOGO</div>
                <div className=''>
                    <Link to="">
                        <button className='get-started-button'>Get Started</button>
                    </Link>
                </div>
                <div className=''>
                    <Link to="/Home">
                        <button className='login-button'>Sign In</button>
                    </Link>
                </div>
            </div>
        </>
    )
}