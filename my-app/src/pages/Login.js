import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <>
            <div className='login-container'>
                <div className='login-logo'>WorkWord</div>
                <div className=''>
                    <Link to="/Home">
                        <button className='guest-button'>Guest</button>
                    </Link>
                </div>
                <div className=''>
                    <Link to="/SigninAccount">
                        <button className='login-button'>Log In</button>
                    </Link>
                </div>
                <div className='terms-and-conditions-container'>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </>
    )
}