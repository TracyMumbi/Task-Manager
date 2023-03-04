import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setUser}) {
  const [user_info, setUserInfo] = useState()
  const navigate = useNavigate()
  

function login(e){
  e.preventDefault()
  fetch("http://localhost:9292/login",{
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify(user_info)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setUser(data)
    localStorage.setItem('user_id', `${data.id}`)
    navigate('/')
  })
}
function onchange(e){
  setUserInfo({...user_info, [e.target.name]: e.target.value})
}

  return (
    <div >
      <h4>Login</h4>
      <form  onSubmit={login}>
        <label >Email</label> <br />
        <input type="email" className='login' placeholder='Enter your email here....' name='email' onBlur={onchange}/>
        <label>Password</label> <br />
        <input type="password" className='login' placeholder='Enter your password...' name='password' onBlur={onchange}/>
        <button className='login_button'>Login</button>
      </form>
    </div>
  )
}

export default Login