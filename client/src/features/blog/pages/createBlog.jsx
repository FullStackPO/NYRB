import React, { useState } from 'react'
import { useBlog } from '../hook/useBlog'
import {useNavigate} from 'react-router'
import '../styles/createBlog.css'


const CreateBlog = () => {

  const { sendBlog } = useBlog()
  const navigate = useNavigate()

  const[btype, setBtype] = useState("")
  const[subject, setSubject] = useState("")
  const[content, setContent] = useState("")

  const submitHandler = async(e) =>{
      e.preventDefault()

      const payload = {btype, subject, content}
      await sendBlog(payload)
      await navigate('/')

  }

  const backButton = () => {
    navigate("/")
  }

  return (
    <>
      <div>

        <button className='back-btn' onClick={backButton}>Back</button>

        <form onSubmit={submitHandler}>

          <h1>Create New Blog</h1>

            <div>
              <label htmlFor="btype">Blog Type</label>
              <input
              id='bytpe'
              type="text"  
              name='btype'
              placeholder='Enter Blog Type'
              value={btype}
              onChange={(e)=>{setBtype(e.target.value)}}
              required
              />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
              id = 'subject'
              type = 'text'
              name='subject'
              placeholder='Enter Subject'
              value={subject}
              onChange={(e)=>{setSubject(e.target.value)}} 
              required
              />
            </div>

            <div>
              <label htmlFor="content">Blog</label>
              <textarea 
                id="content"
                name="content"
                placeholder='Write your blog...'
                value={content}
                onChange={(e)=>{setContent(e.target.value)}}
                required
              />
            </div>

            <button>Post</button>

        </form>
      </div>
    </>
  )
}

export default CreateBlog

