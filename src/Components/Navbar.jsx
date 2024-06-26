import React, { useEffect, useState } from 'react';
import './StyleCss/Navbar.css';
import { FaSearch,FaUserAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import flag from '../assets/images/azerbaijanFla.svg';
import flag2 from '../assets/images/630657.png'

const Navbar = () => {
  return (
<div className='only-large-devices'>
<nav className=" only-large-devices  navbar navbar-expand-sm   bg-black " style={{height:'45px'}}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 gap-3">
        <li className="nav-item">
          <a className="nav-link text-white opacity-75"href="#">Fərdi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white opacity-75" href="#">Biznes üçün</a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link text-white opacity-75" href="#">Şirkət haqqında</a>
        </li>
      </ul>
      <ul className="d-flex align-items-center navbar-nav mb-2 mb-lg-0 me-5  gap-4 ">
      <li className=" nav-item d-flex align-items-center">
          <a className=" nav-link text-white "href="#"> <GiNetworkBars className='me-2' style={{fontSize:'25px', color:'#fff'}}/> Rouminq</a>
        </li>      
      <li className="nav-item">
          <a className="nav-link text-white fw-bold fst-italic"href="#" style={{fontSize:'20px'}}>5G</a>
        </li>   
       
      <li className=" d-flex align-items-center nav-item">
   
          <a className="nav-link text-white border-right"href="#"><FaUserAlt className=' me-2' style={{color:'#fff',fontSize:'20px'}} />Azercell Kabinetim</a>
        </li>      
      {/* <li className="nav-item">
          <a className="nav-link text-white"href="#"><img style={{width:'35px'}}src={flag2} alt="" /></a>
          <li/> */}
          <div class="dropdown">
  <button  class="btn  rounded-0 dropdown-toggle " variant="secondary"type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <img style={{width:'30px'}}src={flag2} alt="" />
  </button>
  <ul class="dropdown-menu "variant="secondary">
    <li><a class="dropdown-item " href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>       
      <li className="nav-item">
          <a className="nav-link text-white me-4"href="#"> <FaSearch style={{fontSize:'20px'}}/></a>
        </li>      
        </ul>
    </div>
  </div>
</nav>
</div>
  )
};

export default Navbar;
