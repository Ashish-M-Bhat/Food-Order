import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/AuthStore';
import cssClasses from './Login.module.css'

export default function Login(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const formRef = useRef();
    
    const authDispatch = useDispatch();
    
    const loginSubmitHandler = (event) =>{
      event.preventDefault();
      if(emailRef.current.value.trim() !== '' && passwordRef.current.value.trim() !== ''){
        authDispatch(authActions.login());
      }
      formRef.current.reset();
    }
  return (
    <div>
        <form ref={formRef} className={cssClasses.loginForm}>
            <h2 style={{textAlign:'center'}}>Please Login</h2>
            <input className={cssClasses.input} type="email" ref={emailRef} placeholder="Email"/>
            <input className={cssClasses.input} type="password" ref={passwordRef} placeholder="Password"/>
            <button className={cssClasses.loginButton} onClick={loginSubmitHandler}>Login </button>
        </form>
    </div>
  )
}
