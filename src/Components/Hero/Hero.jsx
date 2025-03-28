import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero Container'>
            <div className="herotext">
                <h1>We Ensure better education for a better world</h1>
                <p>We believe that quality education is the foundation for a brighter future. By providing better learning opportunities, we empower individuals to create positive change in their communities and beyond. Through knowledge, innovation, and inclusivity, we strive to build a world where everyone has the chance to succeed.</p>
                <button className='btn'> Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
