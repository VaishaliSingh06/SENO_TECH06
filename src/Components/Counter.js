import React, { useEffect, useState } from 'react'
import '../Style/style.css'
const Counter = () => {
    const [Mycount,setMyCount]= useState(0);
    const[Multiple,setMultiple]=useState(0);
  useEffect(()=>{
    setMultiple(Mycount *2);
  }
 , [Mycount]);

  const handleIncreament =()=>{
    setMyCount(prev => prev +1);
  }
  return (
    <div className='mult'>
        <h1>Counter</h1>
        <div className='text'>
        <h2>Count: {Mycount}</h2>
        </div>
        <h3>Multiple of 2: {Mycount} * 2 = {Multiple}</h3>
        <button  className='count-btn'    onClick={handleIncreament}>Increament</button>
        
    </div>
 )
}

export default Counter