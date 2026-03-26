import React from 'react'
import '../App.css'

function LoadingBar({text}) {
  return (
    <div className="scene">
      <div className="loading-screen">
        <p className="loading-text">{text}</p>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  )
}

export default LoadingBar
