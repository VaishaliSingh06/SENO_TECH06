import React from 'react'

const Product = ({ img, name,price,category}) => {
  return (
    <div  className='card'>
        {/* <div className='text'> */}
        <img src={img} alt={name} className='imgpro' />   
        <h3>{name}</h3>
        <p>Price: ₹ {price}</p>
        <p>Category:  {category}</p>
        {/* </div> */}
    </div>
  )
}

export default Product;