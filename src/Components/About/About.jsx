import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_img} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nutring Tommorow's Leaders Today</h2>
                <p>A university is a place of higher learning where students expand their knowledge, develop critical thinking skills, and prepare for their future careers. It offers various academic programs in fields such as science, arts, business, and technology. Universities also foster research and innovation, contributing to society’s progress.</p>
                <p>Beyond academics, universities provide opportunities for personal growth and social engagement. Students can join clubs, participate in sports, and attend cultural events, helping them build friendships and leadership skills. This diverse environment enhances their understanding of different perspectives.

                </p>
                <p>University life is a stepping stone to independence and responsibility. Students learn to manage their time, make important decisions, and adapt to new challenges. The experiences gained during these years shape their future and prepare them for the professional world.</p>
            </div>

        </div>
    )
}

export default About