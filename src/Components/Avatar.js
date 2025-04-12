import React from 'react'

const Avatar = ({imgurl,altText}) => {
  return (
    <>
    <div className='avt'>
      <img 
      src={imgurl}
      alt={altText}
      style={{
        width: "150px",
        height:"150px",
        borderRadius :"50%",
        objectFit:"cover",
        border:"2px solid yellow"

      }}/>
    </div>
    </>
  )
}

export default Avatar