
export const initialState = {
    volumeOfCuboid: 0,
    areaOfCuboid: 0,
    parameterOfCuboid: 0
}

const CalculateVolumeOfReducer = (state, action) => {
        switch (action.type) {
            case'VOLUMEOFCUBOID':
            return {
                ...state,
                volumeOfCuboid: action.value
            }
            case'AREAOFCUBOID':
            return {
                ...state,
                areaOfCuboid: action.value
            }
            case'PARAMETEROFCUBOID':
            return {
                ...state,
                parameterOfCuboid: action.value
            }
            default:
                throw Error('No Result');
        }
}



export default CalculateVolumeOfReducer;