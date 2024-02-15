import React from 'react'
import './About.css'
import johnDoe from '../images/johnDoe.jpeg'
export default function About() {
  return (
    <div id='about-section'>
        <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Ipsum sunt elit in in aliquip fugiat consectetur quis ullamco laboris aute. Ex incididunt enim do nulla quis dolor Lorem deserunt laborum exercitation in aliqua ex sit. Nisi dolor nulla reprehenderit fugiat esse eu sit aute dolor labore laborum occaecat ut nisi. Irure sit ad duis duis consectetur minim magna cupidatat magna minim quis qui do sint. Dolor nisi esse occaecat aliqua cupidatat tempor. Lorem dolor cillum magna veniam enim tempor anim qui nulla.</p>
        </div>
        <img src={johnDoe}/>
    </div>
  )
}
