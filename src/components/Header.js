import React from 'react'
import "./Header.css"
import pasta from '../images/pasta.jpg'

export default function Header() {
    return (
        <header>

            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Nostrud minim labore nisi laborum culpa Lorem incididunt ipsum commodo ea eiusmod. Enim aute aliqua laboris consequat aute ut ullamco ea minim id velit mollit. Fugiat dolore laboris nulla eu non enim occaecat ullamco veniam. Sit dolore ullamco culpa do pariatur ullamco aliquip tempor sunt. Commodo reprehenderit anim excepteur nulla mollit tempor laborum ex dolore excepteur enim ex. Mollit anim ad aliqua voluptate velit aute sit nisi Lorem consequat elit consectetur labore qui.
                </p>
                <button>Reserve a Table</button>
            </div>
            <img src={pasta}/>
        </header>
    )
}
