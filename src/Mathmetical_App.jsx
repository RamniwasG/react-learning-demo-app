import React, { useState } from 'react';

const MathmeticalApp = () => {
    const [ num1 ] = useState(9);
     const [ num2 ] = useState(2);
    // const [ radius ] = useState(7);
    // const [ area  ] = useState(5);
    const [ radius, setRadius] = useState(0);
    const [area, setArea ] = useState();

    const handleRadiusChange = (e) => {
        const { value} = e.target;
        setRadius(value)
    }

    const handleCalculateClick = () => {
        setArea(22/7 * radius * radius);
    }
    

    return <div className="p-3 text-center">

         <h4>Add Two Number</h4> 

        <h1>{(num1 + num2)}</h1> 
        <h1>{num1 + '+' + num2 + ' = ' + (num1 + num2)}</h1><hr/> 

        <h3>Area Of Circle</h3>
        <h4>radius = {radius}</h4>
        <h4>Area = {22/7 * radius * area}</h4> <hr />

        <h2>Calculation Using Input Box:</h2>
        <div className='row'>
            <div className=' col-6 form-group'>
                <label htmlFor='radius'> Enter Number</label>
                <input type='text'
                 name='radius'
                style={{textAlign:'center'}}
                 className='form-control 
                 ms-5 text-center justify-content-center w-100'
                 placeholder='enter any number' onChange={handleRadiusChange} value={radius} />
            </div>
            <div className='col-6'>
                <button type='text' className='btn btn-info btn-md w-50 mt-3' onClick={handleCalculateClick}>Calculate</button>
            </div>
       </div>
        <div className='mt-3'>
            <h2><b>Result-: </b>{area}</h2>
        </div>
    </div>
  
}

export default MathmeticalApp;