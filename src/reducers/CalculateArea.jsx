
import React, {useState, useReducer} from 'react';
import CalculateAreaReducer, { initialState } from './CalculateAreaReduce';

const CalcualteArea = () => {

    const [length, setLength ] = useState();
    const [width, setWidth ] = useState();
    const [ calculate, dispatch] = useReducer(CalculateAreaReducer, initialState)
   
    const handleLengthChange = (event) => {
        const {value } = event.target;
        setLength(value);
    }

    const handleWidthChange = (event) => {
        const {value} = event.target;
        setWidth(value);
    }

    const  onSaveClickbtn = () => {
        dispatch({ type: 'CALCULATEOFAREA', value: length * width })
    }

    const onParallelogramRectangle = () => {
        dispatch({ type: 'PARALLELOGRAMOFRECTANGLE', value: 2 * (length + width)})
    }

    return <div>
            <h3 className='text-center'> {calculate.areaOfRectangle} </h3>
            <div className='form-group'>
                <input type='number' value={width} name='width' className='form-control mb-3' placeholder='Please Enter number' onChange={handleWidthChange} />
                <input type='number' value={length} name='length' className='form-control mb-3' placeholder='Please Enter number' onChange={handleLengthChange} />
            </div>
            <button type="button" onClick={onSaveClickbtn} className="btn btn-primary mb-2">Calculate Area</button>
            <div>
                <button type="button" onClick={onParallelogramRectangle} className="btn btn-primary">Calculate parallelogram</button>
            </div>
            <h2>{calculate.parallelogramOfRectangle}</h2>
    </div>
}

export default CalcualteArea;