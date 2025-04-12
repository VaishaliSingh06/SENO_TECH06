import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import '../Style/style.css'

const Component3 = () => {
  const {role} = useContext(UserContext);
  return (
    
    <div className='role'>
      <p>Your role is :  👩 💻
      <strong>{role}</strong>
      </p>
    </div>
    
  )
}

export default Component3