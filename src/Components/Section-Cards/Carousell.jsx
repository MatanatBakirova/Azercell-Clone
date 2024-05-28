import React from 'react'
import '../../Components/StyleCss/Section.css'
import { Carousel } from 'bootstrap'
import cardphoto from '../../assets/images/650x540-4.png.webp'
import photo1 from '../../assets/images/desktop.png'
import photo2 from '../../assets/images/1400x684-13.jpg.webp'
import photo3 from '../../assets/images//1400x684.jpg.webp'

const Carousell = () => {
  return (
    <div>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class=" desktopsection carousel-item active">
      <img src={photo1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousell