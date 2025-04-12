import React, { useState } from 'react'
import { TbHandClick } from "react-icons/tb";
import '../Style/style.css'
const KeyPresses = () => {
  const[Count,setCount] =useState(0)
  const handleKeyDown =()=>{
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div  className='key' style={{marginTop:'50px',textAlign:'center'}}  >
      <h2>Key Press Counter</h2>
      <br/>
     <div  className='keypress'
     tabIndex={0}//focusable
     onKeyDown={handleKeyDown}
     >
      Click here and start typing...
      <TbHandClick   className='icon'  style={{fontSize:'40px', color:'crimson'}}  />
      </div>
      <p style={{ marginTop: '20px' }}>
        Total key presses: <strong>{Count}</strong>
      </p>
    </div>
  ) 
}

export default KeyPresses