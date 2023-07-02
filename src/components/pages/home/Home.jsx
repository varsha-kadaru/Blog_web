import React, { useEffect, useState } from 'react';
import axios from "axios";
import Posts from "../../posts/Posts.jsx";
import Sidebar from "../../sidebar/sidebar.jsx";
import Header from "../../header/header.jsx";
import "./home.css"
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const location=useLocation();
  const path=location.search
  useEffect(() => {
    const fetchPosts = async () => {
      
        const res = await axios.get("http://localhost:5000/api/posts/"+ path);
        console.log(res);
        setPosts(res.data);
      
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
