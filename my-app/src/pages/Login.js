import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <>
            <div className='login-container'>
                <div className='login-logo'>LOGO</div>
                <div className='button-container'>
                    <Link to="/Home">
                        <button className='login-button'>Login</button>
                    </Link>
                </div>
            </div>
        </>
    )
}