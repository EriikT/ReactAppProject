import React, { useState } from "react";
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from "../components/Navbar";


function Signup (){

    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/SignUp', values)
        .then((res) => {
            if(res.data.Status === "Success"){
                navigate('/LogIn');
            } else {
                alert("Error");
            }
            // console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
        // .then(res => console.log(res))
        // .then(err => console.log(err));
    }


    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="container_content">
                    <h1 className="sh1">WorkWord</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='uu'>
                            <p>Username</p>
                            <input className="userI" placeholder='Enter Username'  
                            onChange={e => setValues({...values, username: e.target.value})}/>
                        </div>
                        <div className='up'>
                            <p>Password</p>
                            <input className="userI" placeholder='Enter Password' 
                            onChange={e => setValues({...values, password: e.target.value})}/>
                        </div>
                        <button type="submit" className='sb'>Sign Up</button>
                    </form>
                    <Link to='/Login' className="b-btn">Already a WorkWord user? Log in</Link>
                    
                </div>

            </div>
        </>
    )
} export default Signup