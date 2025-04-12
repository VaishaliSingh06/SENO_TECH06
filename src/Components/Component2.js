import React, { useContext } from 'react'
import Component3 from './Component3'
import UserContext from '../Context/UserContext'
import '../Style/style.css'
const Component2 = () => {
    const { user } = useContext(UserContext)
    return (

        <div className='comp2'>
            <p>Welocome Back,{user}. 🎉</p>
            <Component3 />
        </div>

    )
}

export default Component2