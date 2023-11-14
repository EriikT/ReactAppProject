import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SigninAccount.css'
import Navbar from '../components/Navbar'

function SigninAccount(){

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
            if(res.data.Status === "Success"){
                navigate('/Home');
            } else {
                
                alert("Userame and Password not matched");
            }
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return(
        <>  
        <div>
            <Navbar />
            <form className='form-container' onSubmit={handleSubmit}>
                <h1>Your Email</h1>
                <input className='input-box' 
                onChange={e => setValues({...values, email: e.target.value})}>
                </input>
                <br></br>
                <h1>Password</h1>
                <input className='input-box'
                onChange={e => setValues({...values, password: e.target.value})}>
                </input>
                <br></br>
                <button id='sign-up-button' type="submit">Sign In</button>
            </form>  
        </div> 
        </>
    )
} export default SigninAccount