import React from 'react'
import './StyleCss/Section.css'
import { FaBars } from "react-icons/fa";
import { FaUser } from 'react-icons/fa6';

const Section = () => {
  return (
    <>
       <section className='container-fluid p-0' >
        <div className='desktopsection'>
          <nav class=" navbar navbar-expand-lg ">
  <div class="navbars container ">
    <div className='userAndBarsButton mt-3 container-fluid'>
    <a class="navbar-brand mt-0 " href="#"><img style={{width:'140px',marginRight:'-30px'}}  src="https://www.azercell.com/theme/images/common/b-2-c-logo.svg" alt="" /></a>
    <div className=' d-lg-none buttons d-flex align-items-center gap-4'>
    <button class="userbutton navbar-toggler border-0 p-0 m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FaUser className='' style={{color:'#fff',fontSize:'20px',opacity:'.9'}}/>
    </button>
    <div className='freediv border opacity-75' style={{height:'25px'}}></div>
    <button class="barsbutton navbar-toggler border-0 p-0 m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FaBars className='' style={{color:'#fff',fontSize:'25px',opacity:'.7'}}/>
    </button>
    </div>
    </div>
  
    <div class="secondnavlink collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="d-flex align-items-center navbar-nav gap-3 mt-4 mb-2 mb-lg-0" >
      <li class="nav-item dropdown">
          <a class=" nav-link-2  dropdown-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            akart
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item"style={{width:'124px'}}>
          <a class="nav-link-2" href="#" >Azercell-li ol</a>
        </li>
        <li class="nav-item dropdown">
          <a class=" nav-link-2 dropdown-2 dropdown-toggle ms-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tariflər və xidmətlər
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link-2 dropdown-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Azercell tətbiqləri 
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link-2 me-3" href="#">Kampaniyalar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link-2" href="#">Dəstək</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>


        </div>
    </section>
    </>
 
  )
}

export default Section