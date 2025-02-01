const CalculateCubeArea = ({ width, height, length, result1, onAreaCalcResult }) => {
    
    const handleBtnClick = () => {
        let result = length * width * height;
        onAreaCalcResult(result)
    }

    return <div>
        <h2>Area of Cube</h2>
        <p>length: {length}, width: {width}, height: {height}</p>
         <p>= {result1}</p>
        <button className="btn btn-primary" onClick={handleBtnClick}>Calculate Area</button>
    </div>
}

export default CalculateCubeArea;
