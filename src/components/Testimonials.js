import React from 'react'
import "./testimonials.css"
import profileImage from "../images/johnDoe.jpeg"
export default function Testimonials() {
  return (
    <div id='testimonials-section'>
      <h2>Testimonials</h2>
      <div id="testimonials">
        <div className='testimonial'>
          <h3>⭐⭐⭐⭐⭐</h3>
          <div className='profile-section'>

          <img src={profileImage}/>
          <p>Do tempor consectetur ad non quis reprehenderit proident dolor adipisicing duis.</p>
          </div>
          <h3>John Doe</h3>
        
        </div>
        <div className='testimonial'>
          <h3>⭐⭐⭐⭐⭐</h3>
          <div className='profile-section'>

          <img src={profileImage}/>
          <p>Do tempor consectetur ad non quis reprehenderit proident dolor adipisicing duis.</p>
          </div>
          <h3>John Doe</h3>
        
        </div>
        <div className='testimonial'>
          <h3>⭐⭐⭐⭐⭐</h3>
          <div className='profile-section'>

          <img src={profileImage}/>
          <p>Do tempor consectetur ad non quis reprehenderit proident dolor adipisicing duis.</p>
          </div>
          <h3>John Doe</h3>
        
        </div>
      </div>

      
    </div>
  )
}
