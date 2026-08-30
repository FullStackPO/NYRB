import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hook/useAuth'

const Register = () => {

  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const navigate = useNavigate()
  const { registerController } = useAuth()

  const submitHandler = async(e) => {
    e.preventDefault()

    const payload = {
      username,
      email,
      password
    }

    await registerController(payload)
    navigate("/login")

  }

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <h1>Register</h1>

          <div>
            <label htmlFor="username">Username</label>
            <input 
            type="text"
            id='username'
            name='username'
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            placeholder='Enter Username' 
            required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            name="email" 
            id="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}} 
            placeholder='Enter Email'
            required
            />
          </div>

          <div>
             <label htmlFor="password">Password</label>
             <input 
             type="password" 
             name="password" 
             id="password"
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}} 
             placeholder='Enter Password'
             required
             />
          </div>

          <button>Register</button>

          <p>Already have account&nbsp;!&nbsp;<Link to='/login'>Login</Link></p>

        </form>
      </div>
    </>
  )
}

export default Register
