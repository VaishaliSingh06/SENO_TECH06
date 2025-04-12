import React, { useState } from 'react';

const AddNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2); 
    setResult(sum);
  };

  return (
    <div  className='number' style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Add Two Numbers</h2>

      <input
        type="text"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: '10px' }}
      />

      <input
        type="text"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: '10px' }}
      />

      <br />
      <br/>
      <button className='button'  onClick={handleAddition}>Add</button>

      {result !== null && (
        <h3 style={{ marginTop: '20px' }}>Result: {result}</h3>
      )}
      
    </div>
  );
};

export default AddNumbers;
