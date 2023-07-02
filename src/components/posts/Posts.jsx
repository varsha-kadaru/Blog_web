import React from 'react'
import "./posts.css"
import Post from "../post/post.jsx"
const posts = ({posts}) => {
  return (
    <div className='posts'>
     {posts.map(p=>(
      <Post post={p}/>
     ))}
    </div>
  )
}

export default posts
