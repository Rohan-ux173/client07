import React from 'react'

import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <h3>Your <span>Logo</span></h3>
        </div>

        <div className='header__menu-item'>
          <ul className='menu-items'>
            <li><a>Home</a></li>
            <li><a>Why us</a></li>
            <li><a>About us</a></li>
            <li><a>Results</a></li>
            <li><a>Testimonial</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
