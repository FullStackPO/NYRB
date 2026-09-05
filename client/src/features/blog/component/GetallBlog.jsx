import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useBlog } from '../hook/useBlog'

const GetallBlog = () => {

    const { fetchBlog } = useBlog()

    const blog = useSelector((state) => state.blog.blog)

    useEffect(() => {
        fetchBlog()
    }, [])

    console.log(blog)

  return (
    <div className='blog'>
      {blog?.map((data) => (
        <div className='blog-card'>
        <div className='user-info'>
          <div className='details'>
            <p>{data.user.username}</p>
            <p>{data.user.email}</p>
          </div>
          <div className='btype'>
          <p>{data.btype}</p>
          </div>
        </div>
        <p>{data.content}</p>
        </div>
      ))}
    </div>
  )
}

export default GetallBlog
