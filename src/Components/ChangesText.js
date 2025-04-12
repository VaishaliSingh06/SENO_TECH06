import React, { useState } from 'react'


const ChangesText = () => {
  const [buttonText, setButtonText] =useState('Click ME:😄')
  const handelClick = () => {
    setButtonText('Hello this Vaishu Thakur 🥰')
  }

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <button className='glow-on-hover' onClick={handelClick}>{buttonText}</button>
    </div>
  )
}

export default ChangesText;