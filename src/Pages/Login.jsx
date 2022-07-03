import React from 'react'

import {ReactComponent as Logo} from '../assets/Logo.svg'
import {ReactComponent as PabloSignIn} from '../assets/pablo-sign-in.svg'

import './Login.style.scss'

const Login = () => (
  <main className='login-container'>
    <section className='img-section'>
      <Logo />
      <PabloSignIn className='illustration' />
    </section>
    <section className='login-section'>
      <Logo className='mobile-logo'/>
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <form action='' className='form-container'>
        <input type='email' placeholder='Email' className='input' />
        <input type='password' placeholder='Password' className='input' />
        <p>FORGET PASSWORD?</p>
        <input type='submit' className='submit-input' value='LOG IN' />
      </form>
    </section>
  </main>
)

export default Login