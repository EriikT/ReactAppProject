import React from 'react';
import Navbar from "../components/Navbar"
import './CreateAccount.css';

export default function CreateAccount() {

  return (
    <div>
        <Navbar />
        
        <form className='form-container'>
            <h1>First Name</h1>
            <input className='input-box'></input>
            <br></br>
            <h1>Last Name</h1>
            <input className='input-box'></input>
            <br></br>
            <h1>Your Email</h1>
            <input className='input-box'></input>
            <br></br>
            <h1>Password</h1>
            <input className='input-box'></input>
            <br></br>
            <button id='sign-up-button'>Sign Up</button>
        </form>  
    </div>
  );
}