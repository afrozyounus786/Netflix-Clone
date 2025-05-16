import React, { useRef } from 'react';
import './Signin.css';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("User Registered:", userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in:", userCredential.user);
      navigate('/');
    } catch (error) {
      alert("Sign-in failed: " + error.message);
      console.error(error);
    }
  };
  

  return (
    <div className='signin'>
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign in</button>
        <h4>
          <span className='signin-gray'>New to Netflix? </span>
          <span className='signin-link' onClick={register}>Sign Up now</span>
        </h4>
      </form>
    </div>
  );
};

export default Signin;
