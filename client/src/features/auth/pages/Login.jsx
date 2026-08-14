import React, { useState } from 'react'
import '../styles/form.css'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <>
      <div>
        <form>
          <h1>Login</h1>

            <div>
              <label htmlFor="email">Email</label>
              <input
              id='email'
              type="text"  
              name='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
              id = 'password'
              type = 'password'
              name='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}} 
              required
              />
            </div>

            <button>Login</button>

        </form>
      </div>
    </>
  )
}

export default Login
