import { useState } from 'react';

import CalculateRectangleArea from "./CalcRectangleArea";
import CalculateCubeArea from "./CalcCubeArea";

const StateLifting = () => {

    const [length] = useState(5);
    const [width] = useState(10);
    const [height] = useState(4);
    const [result1, setResult1] = useState(0);
    const [result2, setResult2] = useState(0);

    const handleCalcAreaOfRectangle = (result) => {
        setResult2(result)
    }

    const handleCalcAreaOfCube = (result) => {
        setResult1(result)
    }
    
    return <div className="p-3">
        <h1 className="text-center">State lifting</h1>
        <div className='row d-flex'>
            <div className='col-6'>
                <CalculateRectangleArea
                    width={width} 
                    height={height}
                    onAreaCalcResult={handleCalcAreaOfRectangle}
                    result2={result1}
                />
            </div>
            <div className='col-6'> 
                <CalculateCubeArea
                    length={length}
                    width={width}
                    height={height}
                    onAreaCalcResult={handleCalcAreaOfCube}
                    result1={result2}
                />
            </div>
        </div>
    </div>
}

export default StateLifting;
