import React from 'react'


import './hero.css'
import logo from '../../assets/haider.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <div className='hero__left'>
          <h1>Get 15+ Meetings per month and expand</h1>
          <h1 className='hero__ele'>growth potential</h1>
          <p>Get 15+ monthly meetings with your ideal customers, all without any monthly retainers or commission. Be the hero your business deserves and join us on the path to success</p>
          <button type='button' className='btn'> Book Strategy Call Now!</button>
        </div>

        <div className='hero__right'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Hero
