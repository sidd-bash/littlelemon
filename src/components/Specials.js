import React from 'react'
import greekSalad from '../../images/greekSalad'
export default function Specials() {
  return (
    <div>
      <div>
      <h2>Specials</h2>
      <button>Online Menu</button>
      </div>
      <div>
        <img src={greekSalad}/>
        <div>
        <h2>Greek Salad</h2>
        <p>$12.99</p>
        </div>
        
        <p>Get a fresh and colorful Greek salad in no time. It's great with grilled meats at a barbecue, or on its own as a veggie main</p>
        <button>Order</button>
      </div>
      <div>
        <img src={greekSalad}/>
        <div>
        <h2>Greek Salad</h2>
        <p>$12.99</p>
        </div>
        
        <p>Get a fresh and colorful Greek salad in no time. It's great with grilled meats at a barbecue, or on its own as a veggie main</p>
        <button>Order</button>
      </div>
      <div>
        <img src={greekSalad}/>
        <div>
        <h2>Greek Salad</h2>
        <p>$12.99</p>
        </div>
        
        <p>Get a fresh and colorful Greek salad in no time. It's great with grilled meats at a barbecue, or on its own as a veggie main</p>
        <button>Order</button>
      </div>
    </div>
  )
}
