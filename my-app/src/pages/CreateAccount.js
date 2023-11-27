import React, { useState } from 'react';
import Navbar from "../components/Navbar"
import './CreateAccount.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreateAccount() {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/Signup', values)
      .then((res) => {
        if (res.data.Status === "Success") {
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
    <>
      <Navbar />
      <div className='form-container'>
        <form className='form-box' onSubmit={handleSubmit}>
          <h1>First Name</h1>
          <input name='firstName' />
          <br />
          <h1>Last Name</h1>
          <input name='lastName' />
          <br />
          <h1>Your Email</h1>
          <input
            name='email'
            value={values.email}
            onChange={e => setValues({ ...values, email: e.target.value })}
            autoComplete='email'
          >
          </input>
          <br />
          <h1>Password</h1>
          <input
            name='password'
            onChange={e => setValues({ ...values, password: e.target.value })}
          >
          </input>
          <br />
          <button id='sign-up-button' type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}