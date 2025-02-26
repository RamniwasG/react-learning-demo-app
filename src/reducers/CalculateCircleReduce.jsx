
// export const initialState = {
//     volumeOfCuboid: 0,
//     areaOfCuboid: 0,
//     parameterOfCuboid: 0
// }
 export const initialState = {
    areaOfCircle: 0
} 

const CalculateCircleReduce = (state, action) => {
            switch(action.type) {
                case'AREAOFCIRCLE':
                return {    
                    ...state,
                    areaOfCircle: action.value
                }
                default:
                    throw Error('No Result');
            }
}

export default CalculateCircleReduce

