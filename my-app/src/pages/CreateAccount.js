import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import './CreateAccount.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getUserProfile, createUserProfile } from '../lib/firestore';
import Button from '../lib/button';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors
    
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const profile = await getUserProfile(user.uid);
      if (!profile) {
        await createUserProfile(user.uid, {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          name: firstName + ' ' + lastName,
      
        });
      }
      
      // Here you would typically:
      // 1. Save additional user info (firstName, lastName) to your database
      // 2. Redirect user or update UI
      navigate('/'); // Redirect after successful signup
    } catch (error) {
      setError(error.message);
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='form-container'>
        <form className='form-box' onSubmit={handleSubmit}>
          <h1>First Name</h1>
          <input 
            name='firstName' 
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <br />
          <h1>Last Name</h1>
          <input 
            name='lastName' 
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <br />
          <h1>Your Email</h1>
          <input
            name='email'
            type='email'  // Add type for better validation
            value={email}
            onChange={e => setEmail(e.target.value)}   
            autoComplete='email'
          />
          <br />
          <h1>Password</h1>
          <input
            name='password'
            type='password'  // Add type to hide password input
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete='new-password'  // Changed to 'new-password'
          />
          <br />
          {error && <div className="error-message">{error}</div>}
          <button id='sign-up-button' type="submit">Sign Up</button>
          <h2>or</h2>
          <Button/>
        </form>
      </div>
    </>
  );
}