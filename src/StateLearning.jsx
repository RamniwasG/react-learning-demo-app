import React, { useState } from 'react';

const StateLearning = () => {
    
    // const [num1] = useState(1);
    // const [num2] = useState(2);
    const [radius, setRadius] = useState(0);
    const [area, setArea] = useState(0);

   
   const handleRadiusChange = (e) => {
        const { value } = e.target;
        setRadius(value)
    }

    const handleCalculateClick = () => {
        setArea(3.14 * radius * radius)
    }

    return <div className='p-3'>
        {/* <h2>Learn React States</h2><br/>
        <h3>Add Two number</h3>
        <h1>{num1 + '+' + num2 + ' = ' + (num1 + num2)}</h1><hr/>
        <h3>Area of Circle</h3>
        <h4>radius  = {radius}</h4>
        <h4>Area  = {3.14 * radius * radius}</h4><hr/> */}
        
       <h3>Calculation using Input box</h3>
        <div className="form-group"> 
            <label htmlFor='radius'>Radius</label>
            <input type='text' name='radius' className='form-control w-50' placeholder='enter radius' onChange={handleRadiusChange} value={radius} />
        </div>
        <button type='button' className='btn btn-secondary btn-md w-50 mt-3' onClick={handleCalculateClick}>Calculate</button>
        <div className='mt-3'>
            <b>Result:</b> {area}
         </div> 
    </div>
}

export default StateLearning;