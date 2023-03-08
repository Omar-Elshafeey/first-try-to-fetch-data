import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
  <div class="logo">
    <a href="#">Your Logo</a>
  </div>
  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
