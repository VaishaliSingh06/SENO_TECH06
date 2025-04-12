import React, { useState } from 'react'
import '../Style/style.css'
    

const FormDisplay = () => {
    const [inputvalue,setInputVaue] =useState('');
    const handleChange =(e)=>{
       setInputVaue(e.target.value);
    };
    return (
    <div>
    <div className='from'  >
        <h3>Input Form</h3>
        <br/>
        <input 
        type='text'
        value={inputvalue}
        onChange={handleChange}
        placeholder='Enter Something here....'
        style={{padding:'8px',fontSize:'20px'}}
     />
     <br/>
     <br/>
     <p><strong>InputValue here:-</strong>{inputvalue}</p>
    </div>
    </div>
  )
}

export default FormDisplay