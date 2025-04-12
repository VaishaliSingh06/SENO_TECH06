import React, { useState } from 'react'
import UserContext from '../Context/UserContext';
import Component2 from './Component2';
import '../Style/style.css'
const Component1 = () => {
const [user] =useState('Vaishali');
const [role] =useState('Admin');


  return (
    <div className='context'>
       <UserContext.Provider value={{ user, role }}>
       <div className='text_1'>
        <h1>Hello {user}!😃</h1>
        <Component2/>
       </div>

       </UserContext.Provider>


    </div>
  )
}

export default Component1