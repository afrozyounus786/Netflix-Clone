import React, { useEffect, useState } from 'react'
import './Navbar.css'
import img from '../assets/img.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleNavBar = () => {
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(() => {
      window.addEventListener("scroll" , handleNavBar);
      return () => window.addEventListener("scroll" , handleNavBar);
    }, [])
    
  return (
    <div className={`navbar ${show &&"navbar-dark"}`}>
        <div className="nav-contents">
        <img 
        onClick={() => navigate("/")}
        className='nav-logo' src={img} alt="" />

        <img 
        onClick={() => navigate('/profile')}
        className='nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar