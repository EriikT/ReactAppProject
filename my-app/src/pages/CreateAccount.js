import React, { useState} from 'react';
import Navbar from "../components/Navbar"
import './CreateAccount.css';
import { useNavigate   } from 'react-router-dom'
import axios from 'axios'

export default function CreateAccount() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8081/Signup', values)
      .then((res) => {
          if(res.data.Status === "Success"){
              navigate('/SigninAccount');
          } else {
            alert("Error");
          }
      })
      .catch((err) => {
        console.error(err);
      })
    }

  return (
    <div>
        <Navbar />
        <form className='form-container' onSubmit={handleSubmit}>
            <h1>First Name</h1>
            <input className='input-box'></input>
            <br></br>
            <h1>Last Name</h1>
            <input className='input-box'></input>
            <br></br>
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
            <button id='sign-up-button' type="submit">Sign Up</button>
        </form>  
    </div>
  );
}