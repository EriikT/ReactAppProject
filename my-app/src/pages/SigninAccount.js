import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SigninAccount.css'
import Navbar from '../components/Navbar'

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
        // update the Axios requests to use the correct URL of Heroku or AWS for backend host.
        // axios.post('https://your-heroku-app.herokuapp.com/Login', values)
        // axios.post('https://your-aws-backend-url/Login', values)
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
                    <Link to="/CreateAccount">
                        <button id='sign--up--button'>Sign Up</button>
                    </Link>
                </form>
            </div>
        </>
    )
} export default SigninAccount