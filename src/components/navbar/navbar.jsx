import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { Context } from '../../context/Context';

const Navbar = () => {
 
  const {user,dispatch}=useContext(Context);

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
  }

  const PF = "http://localhost:5000/images/"

  return (
    <div className='top'>
      <div className="topLeft">
      <Link to="https://www.instagram.com/varsha_kadaru/">
        <i className="topIcon fa-brands fa-square-facebook"></i></Link>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-youtube"></i>
      </div>
      <div className="topCenter">
        <ul className='topList'>
          <li className='topListItem'>
            <Link to="/" className='link'>HOME</Link>
          </li>
          <li className='topListItem'>
            <Link to="/about" className='link'>ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link to="/write" className='link'>WRITE</Link>
          </li>
          <li className='topListItem'>
            <Link to="/contact" className='link'>CONTACT</Link>
          </li>
          {user && <li className='topListItem'>
            <Link to="/login" className='link' onClick={handleLogout}>{user && "LOGOUT"}</Link>
          </li>}
        </ul>
      </div>
      <div className="topRight">
        {user?
        (<Link to='settings' className='link'>
          <img className="navbarImg" src={PF+user.profilePic} alt='img' />
        </Link>):
        (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar;
