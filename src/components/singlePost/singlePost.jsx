import React, { useContext, useEffect, useState } from 'react'
import "./singlePost.css"
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'

import { Context } from '../../context/Context'

const Singlepost = () => {
  const location=useLocation();
  const path=location.pathname.split('/')[2];
  
  const {user}=useContext(Context)
  const [post,setPost]=useState({});
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [updateMode,setUpdateMode]=useState(false);

  useEffect(()=>{

    const getPost=async()=>{
      const res=await axios.get("http://localhost:5000/api/posts/"+path)
      console.log(res.data)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    } 
    getPost()
  },[path])
  const PF="http://localhost:5000/images/"
  const handleDelete=async(e)=>{
    try {
      
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`,{data:{username:user.username}})
      window.location.replace("/")
    } catch (error) {
      console.log(error)
    }
  }

  
  const handleUpdate=async()=>{
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`,{
        username:user.username,
        title,
        desc
      })
      setUpdateMode(false)
      //window.location.replace(`http://localhost:3000/post/${post._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='singlePost'>
      <div className="singlepostWrapper">
        {post.photo && (

          <img className='singlePostImg' src={PF+post.photo} alt=''/>
        )}
        {
          updateMode ?  <input type='text' className='singlePostTitleInput' value={title} onChange={(e)=>setTitle(e.target.value)}/>:(

        <h1 className='singlePostTitle'>
            {post.title}
            {post.username===user?.username && (

              <div className='singlePostEdit'>
                  <i className='singlePostIcon far fa-edit' onClick={()=>setUpdateMode(true)}></i>
                  <i className='singlePostIcon far fa-trash-alt' onClick={handleDelete}></i>
              </div>
            )}
        </h1>
          )
        }

        <div className="singlePostInfo">
            
            <span className='singlePostAuthor'>Author : 
              <Link to={`/?user=${post.username}`}>
              <b>{post.username}</b>
              </Link>
            </span>
            
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {
          updateMode ? ( <textarea  className='singlePostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}/>):(

            <p className='singlePostDesc'>
              {desc}
            </p>
        
          )
        }
        {updateMode && (
          <button className="singlePostButton" 
          onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  )
}

export default Singlepost
