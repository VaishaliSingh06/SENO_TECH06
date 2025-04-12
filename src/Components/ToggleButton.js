import React, { useState } from 'react';
import '../Style/style.css'
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prev => !prev);//taking previous state !prev from false to true
  };

  return (
    <div  className="toggle-container"  style={{ textAlign: 'center', marginTop: '50px' }}>
      <h5>Toggle Switch</h5>
      <p>Status: <strong className='tog'>{isOn ? 'ON' : 'OFF'}</strong></p>{/*Ison if fasle than off if true than */}
      
    <div className={`toggle ${isOn ? 'on' : ''}`}>
     <button
    onClick={handleToggle}
    className="toggle-btn"
    aria-pressed={isOn}
  >
    <div className="indicator"></div>
  </button>
</div>
 </div>
  
  );
};

export default ToggleButton;
