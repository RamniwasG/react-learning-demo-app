
export const initialState = {
   areaOfRectangle: 0,
   parallelogramOfRectangle: 0
}

const CalculateAreaReducer = (state, action) => {
        switch(action.type) {
            case'CALCULATEOFAREA':
            return {
                ...state,
                areaOfRectangle: action.value
            }
            case'PARALLELOGRAMOFRECTANGLE':
            return {
                ...state,
                parallelogramOfRectangle: action.value
            }
            
            default:
                throw Error ('Something went wrong')
        }
}

export default CalculateAreaReducer;