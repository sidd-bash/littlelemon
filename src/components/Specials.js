import React from 'react'
import greekSalad from '../images/greekSalad.jpg'
import "./Specials.css"
export default function Specials() {
  return (
    <div id='specials-section'>
      <div className='specials-heading'>
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>

      <div id='specials'>
        <div className='special'>
          <img src={greekSalad} />
          <div >
            <div className='special-heading'>
              <h2>Greek Salad</h2>
              <p>$12.99</p>
            </div>

            <p className='special-description'>Get a fresh and colorful Greek salad in no time. It's great with grilled meats at a barbecue, or on its own as a veggie main</p>
            <button>Order</button>
          </div>

        </div>
        
        <div className='special'>
          <img src={greekSalad} />
          <div >
            <div className='special-heading'>
              <h2>Greek Salad</h2>
              <p>$12.99</p>
            </div>

            <p className='special-description'>Get a fresh and colorful Greek salad in no time. It's great with grilled meats at a barbecue, or on its own as a veggie main</p>
            <button>Order</button>
          </div>

        </div>

        <div className='special'>
          <img src={greekSalad} />
          <div >
            <div className='special-heading'>
              <h2>Greek Salad</h2>
              <p>$12.99</p>
            </div>

            <p className='special-description'>Get a fresh and colorful Greek salad in no time. It's great with grilled meats at a barbecue, or on its own as a veggie main</p>
            <button>Order</button>
          </div>

        </div>
      </div>

    </div>
  )
}
