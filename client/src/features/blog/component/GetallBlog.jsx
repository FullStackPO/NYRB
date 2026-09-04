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
    <div>
      {blog?.map((data) => (
        <div>
        <p>{data.user.username}</p>
        <p>{data.user.email}</p>
        <p>{data.btype}</p>
        <p>{data.content}</p>
        </div>
      ))}
    </div>
  )
}

export default GetallBlog
