import React from 'react'
import './Hero.css'
import Crypto from '../../assets/hero-img.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            {/* lef side */}
                <div className="lef">
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy, Sell and store hundreds of Cryptocurrency</p>
                    <div className="input-container">
                        <input type="email" placeholder='Enter your email'/>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
            {/* Right side */}
            <div className="right">
                <div className="img-container">
                    <img src={Crypto} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero