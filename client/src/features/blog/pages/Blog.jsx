import React from 'react'
import '../styles/feed.css'
import Nav from '../component/Nav'
import GetallUsers from '../component/GetallUsers'
import GetallBlog from '../component/GetallBlog'

const Blog = () => {

  return (
    <>
      <Nav />
      <main>
        <section className='feed'>
          <GetallBlog />
        </section>
        <section className='users'>
          <GetallUsers />
        </section>
      </main>
    </>
  )
}

export default Blog
