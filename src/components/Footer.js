import React from 'react'
import logo from '../images/logo.jpg'
import "./Footer.css"
export default function Footer() {
  return (
    <footer>
      <img src={logo}/>
      <div>
        <h3>Doormat Navigation</h3>
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
            <li><a>Address</a></li>
            <li><a>Phone Number</a></li>
            <li><a>Email</a></li>
        </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
            <li><a>Linkedin</a></li>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
        </ul>
      </div>
      

    </footer>
  )
}
