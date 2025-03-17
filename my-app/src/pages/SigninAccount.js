import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SigninAccount.css'
import Navbar from '../components/Navbar'
import Button from '../lib/button'

function SigninAccount() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8081/Login', values)
            .then((res) => {
                if (res.data.Status === "Success") {
                    navigate('/Home');
                } else {

                    alert("Userame and Password not matched");
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <>
            <Navbar />
            <div className='sign-in-container'>
                <form className='sign-in-form-box' onSubmit={handleSubmit}>
                    <h1>Your Email</h1>
                    <input className='input-box'
                        onChange={e => setValues({ ...values, email: e.target.value })}>
                    </input>
                    <br />
                    <h1>Password</h1>
                    <input className='input-box'
                        onChange={e => setValues({ ...values, password: e.target.value })}>
                    </input>
                    <br />
                    <button id='sign-in-button' type="submit">Sign In</button>
                    <h2>or</h2>
                    <Button/>
                    <h2></h2>
                    <Link to="/CreateAccount">
                        {/* <button id='sign--up--button'>Sign Up</button> */}
                        <p>Don't have a account? Sign Up!</p>
                    </Link>
                </form>
            </div>
        </>
    )
} export default SigninAccount