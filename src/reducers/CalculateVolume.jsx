import React, { useReducer, useState } from "react";
import CalculateVolumeOfReducer, { initialState } from "./CalculateVolumeOfReducer";


const CalculateVolumeOfCuboid = () => {

    const [ length, setLength ] = useState(0);
    const [ width,  setWidth ] = useState(0);
    const [ height, setHeight ] = useState(0);
    const [ calculateVolume, dispatch ]  = useReducer(CalculateVolumeOfReducer, initialState);

    const handleLengthChange = (event) => {
        const {value} = event.target
        setLength(value)
    }

    const handleWidthChange = (event) => {
        const {value} = event.target
        setWidth(value);
    }

    const handleheightChange = (event) => {
        const {value} = event.target
        setHeight(value)
        
    }

    const setformulaofVolume = () => {
        dispatch({type: 'VOLUMEOFCUBOID', value: length * width * height})
    }

    const setAreaOfCuboid = () => {
        dispatch({type: 'AREAOFCUBOID', value: 2 * (length * width + width * height + height * length)})
    }
    const setParameterOfCuboid = () => {
        dispatch({type:'PARAMETEROFCUBOID', value: 4 * (length * height * width)})
    }

    return <div className="text-center">
        <h1 className="text-center bg-success text-white">Calculate Volume:</h1>
        <h3>{calculateVolume.volumeOfCuboid}</h3>
        <div className="form-group mb-3">
            <input type="number" name="length" className="form-control mb-3" placeholder="Enter length" 
            onChange={handleWidthChange} />
            <input type="number" name=" width" className="form-control mb-3"placeholder="Enter width"
            onChange={handleLengthChange} />
            <input type="number" name="height" className="form-control mb-3" placeholder="Enter height" 
            onChange={handleheightChange} />
        </div>
        <div className="mb-2">
            <button type="button" onClick={setformulaofVolume} className="btn w-50 text-white btn-info">Get Volume</button>
        </div>

        <div className="mb-2">
            <button type="button" onClick={setAreaOfCuboid} className="btn w-50 text-white btn-info">Area Cuboid</button>
        </div>
        <div className="mb-2">
            <button type="button" onClick={setParameterOfCuboid} className="btn w-50 text-white btn-info">Area Cuboid</button>
        </div>
        
        <div className="text-center" style={{border:'2px solid yellow height: 200px'}}>
        <h3>{calculateVolume.areaOfCuboid}</h3>
        <h3>{calculateVolume.parameterOfCuboid}</h3>
        </div>

    </div>
}

export default CalculateVolumeOfCuboid;