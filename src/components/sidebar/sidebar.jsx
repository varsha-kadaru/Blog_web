import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [cats,setCats]=useState([]);

  useEffect(()=>{
    const getCats=async()=>{
      const res=await axios.get("http://localhost:5000/api/categories")
      console.log(res.data)
      setCats(res.data)
    }
    getCats()
  },[])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className="sidebarImg" src='https://upload.wikimedia.org/wikipedia/commons/9/91/Boki-avatar.jpg' alt=''/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa possimus 
          deserunt mollitia odio quaerat est quis asperiores a 
          quam vel. Eius vitae earum saepe harum expedita 
          repellat ipsam ipsum ex tempora? Maxime odit libero 
          </p>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`}>
              <li className='sidebarListItem'>
                {c.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-youtube"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
