import React, { useReducer, useState } from "react";
import CalculateCircleReduce, { initialState } from "./CalculateCircleReduce";

const AreaOfCircle = () => {

    const [ radius, setRadius ] = useState(0);
    const [ circleRed, dispatch ] = useReducer(CalculateCircleReduce, initialState)
    
    const handleRadiusChange = (event) => {
        const {value} = event.target
        setRadius(parseInt(value))
    }
   
   const setInputButton = () => {
    const area = 3.14 * (radius * radius)
    console.log(area);
        dispatch({type: 'AREAOFCIRCLE', value: area})
    }

    return <div>
        <h2 className='text-cetnter'>Area Of Circle:</h2>
        <h2>{circleRed.areaOfCircle}</h2>
        <div>
            <input type='number' name='circle' id='circle' placeholder="Enter Radius" onChange={handleRadiusChange} />
            <button type='button' onClick={setInputButton} className='btn btn-warning btn-white'>Get Radius</button>
        </div>
    </div>
}

export default AreaOfCircle;