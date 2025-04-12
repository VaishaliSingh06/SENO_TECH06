import React from 'react'
import Product from './Product'
// app.css
const ProductList = () => {
  return (
    <>
    <h1 id="prolist">ProductList</h1>
    <div className='main' >
      <Product 
     img="/img/smartwatch.jpeg"
      name ="SmartWatch"
       price={100000} 
       category="Electronics"/>
      <Product 
      img="/img/chair.jpeg"
      name="Chair" price={1000} category="Furniture" />
      <Product
      img="/img/t-shit.jpeg" 
      name ="T-shirt" 
      price={20000} 
      category="clothes"/>
    </div>
    </>
  )
}

export default ProductList;