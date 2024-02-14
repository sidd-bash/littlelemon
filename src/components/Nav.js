import React from 'react'
import logo from '../../images/logo'
export default function Nav() {
  return (
    <nav>
        <img src={logo}></img>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}
