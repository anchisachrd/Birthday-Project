import React, { useState } from 'react'  // เพิ่ม useState
import flowers from "../assets/flower.svg"


function Flower() {
  const [claimed, setClaimed] = useState(false)
   return (
    <div className="scene wish-screen">
      <div className="wish-content">
        <img src={flowers} alt="flowers" className="flowers-img" />
        {!claimed ? (
          <>
            <button className="claim-btn" onClick={() => setClaimed(true)}>
              Claim your flower
            </button>
          </>
        ) : (
          <p className="wish-result-text">Your wish will come true😽</p>
        )}
      </div>
    </div>
  )
}

export default Flower
