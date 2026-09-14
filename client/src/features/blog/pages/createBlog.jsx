import React from 'react'

const createBlog = () => {
  return (
    <>
      <div>
        <form>
          <h1>Create New Blog</h1>

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

            <button>Post</button>

        </form>
      </div>
    </>
  )
}

export default createBlog
