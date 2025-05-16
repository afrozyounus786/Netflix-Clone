import React, { useState } from 'react'
import './Login.css'
import img from '/src/assets/img.png';
import Signin from './Signin';


const Login = () => {

    const [signIn, setSignIn] = useState(false);

  return (
    <div className='login'>
        <div className="login-backgroud">
            <img className="login-logo" src={img} alt="" />
            <button onClick={() => setSignIn(true)} className='login-btn'>Sign in</button>
            <div className="login-gradient"></div>
            <div className="login-body">

                {signIn ? (<Signin/>) : (
                    <>
                    <h1>Unlimited films , TV programs and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                    <div className="login-input">
                        <form>
                            <input type="email" placeholder='Email Address' />
                            <button onClick={() => setSignIn(true)} className='login-btn2'>GET STARTED</button>
                        </form>
                    </div>
                    </>
                )}
            </div>
                </div>
    </div>
  )
}

export default Login