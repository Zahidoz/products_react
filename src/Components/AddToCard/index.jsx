import React from 'react'
import './style.scss'

const AddToCard = ({setShow}) => {
  return (
    <div className="basket-c">
      <button onClick={()=>setShow(false)}>Close</button>
      <h1>Add To Card</h1>
      <div className="basketCard">
        <div className="basket-info">
          <img src="" alt="" />
          <div className="p-txt">
            <p>category</p>
            <h3>ProductName</h3>
          </div>
        </div>
        <div className="basket-pricing">
          <div className="count-s">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <h3>129 azn</h3>
        </div>
      </div>
    </div>
  );
}

export default AddToCard