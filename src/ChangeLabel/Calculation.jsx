import React, { useState } from "react";

const CalculationComp =  () => {
    const[radius, setRadius] = useState(0)
    const [area, setArea] = useState()

    const handleChange = () => {
        const {value} = e.target;
        setRadius(value)
    }
    
    const handleCalculateAreaClick = () => {
        setArea(22/7 * radius * radius)
    }

    return <div>
        <div>
            <label htmlFor='number'>Area Of Square</label>
            <input type='text' name='number' className="form-control mt-3" onChange={handleChange}  value={radius} />
        </div>
        <div>
            <label htmlFor='number'>Area Of Rectangle</label>
            <input type='text' name='number' className="form-control mt-3" onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='number'>Area Of Cuboid</label>
            <input type='number' name='number' className="form-control mt-3" onChange={handleChange} />
            <input type='number' name='number' className="form-control mt-3" onChange={handleChange} />
            <input type='number' name='number' className="form-control mt-3" onChange={handleChange} />
        </div>
            <div className='col-6'>
            <button type='text' className='btn btn-info btn-md w-50 mt-3' onClick={handleCalculateAreaClick}>Calculate</button>
        </div>
    </div>
}

export default CalculationComp;
