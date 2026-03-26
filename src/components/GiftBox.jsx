import React, { useState, useEffect } from 'react'
import giftBox from "../assets/gift-box.svg"
import LoadingBar from './LoadingBar'
import BirthdayCake from './BirthdayCake'
import Flower from "./Flower"

import '../App.css'

function GiftBox() {
  const [showBubble, setShowBubble] = useState(false)
  const [bubbleVisible, setBubbleVisible] = useState(false)
  const [showRings, setShowRings] = useState(false)
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true)
      setTimeout(() => {
        setBubbleVisible(true)
        setShowRings(true)
      }, 300)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    if (phase !== 'idle') return
    setPhase('loading')
    setTimeout(() => setPhase('found'), 4000)
    setTimeout(() => setPhase('cake'), 7000)
  }

  if (phase === 'loading') return <LoadingBar text="Scanning for the birthday boy…" />
  if (phase === 'found') {
    return (
      <div className="scene">
        <p className="found-text">Found a cute silly Spaniard here🤓</p>
      </div>
    )
  }
  if (phase === 'cake') return <BirthdayCake onWish={() => setPhase('wish')} />
  if (phase === 'wish') return <Flower />

  return (
    <div className="scene">
      <div className="gift-wrapper" onClick={handleClick}>
        <div className="bubble-wrapper">
          {showBubble && (
            <div className={`speech-bubble ${bubbleVisible ? 'visible' : ''}`}>
              Hola, Lindo 🥸
            </div>
          )}
        </div>
        <div className="gift-box-wrapper">
          {showRings && (
            <>
              <div className="ring ring-1" />
              <div className="ring ring-2" />
            </>
          )}
          <img className="gift-box" src={giftBox} alt="gift" />
        </div>
        <div className="gift-shadow" />
      </div>
    </div>
  )
}
export default GiftBox
