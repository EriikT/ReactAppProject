import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SigninAccount.css';
import Navbar from '../components/Navbar';
import Button from '../lib/button';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SigninAccount() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Successful login - redirect to home
            navigate('/Home');
        } catch (error) {
            setError(error.message);
            console.error("Login error:", error);
        }
    }

    return (
        <>
            <Navbar />
            <div className='sign-in-container'>
                <form className='sign-in-form-box' onSubmit={handleSubmit}>
                    <h1>Your Email</h1>
                    <input 
                        className='input-box'
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <br />
                    <h1>Password</h1>
                    <input 
                        className='input-box'
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    {error && <div className="error-message">{error}</div>}
                    <button id='sign-in-button' type="submit">Sign In</button>
                    <h2>or</h2>
                    <Button/>
                    <h2></h2>
                    <Link to="/CreateAccount">
                        <p>Don't have an account? Sign Up!</p>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default SigninAccount;