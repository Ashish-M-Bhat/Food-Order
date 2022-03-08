import React, { useState, useContext } from 'react'
import MenuItemsContext from './context-api/MenuItemsContext';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const ctx = useContext(MenuItemsContext);
    
    const loginSubmitHandler = (event) =>{
        event.preventDefault();
        if(password.length > 5)
            ctx.setIsLoggedIn(true);
    }
  return (
    <div>
        <form>
            <label>Email</label>
            <input type={email} onChange={(e)=>setEmail(e)} />
            <label>Password</label>
            <input type={password} onChange={(e)=>setPassword(e)}/>
            <button onClick={loginSubmitHandler}>Login </button>
        </form>
    </div>
  )
}
