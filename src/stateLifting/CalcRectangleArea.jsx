// import { useState } from 'react';

const CalculateRectangleArea = ({ width, height, onAreaCalcResult, result2 }) => {
    // const [width] = useState(10);
    // const [height] = useState(4);

    const handleBtnClick = () => {
        let result = width * height;
        onAreaCalcResult(result)
    }
    
    return <div>
        <h2>Area of Rectangle</h2>
        <p>= {result2}</p>
        <button className="btn btn-primary" onClick={handleBtnClick}>Calculate Area</button>
    </div>
}

export default CalculateRectangleArea;
