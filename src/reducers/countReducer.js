// initial state declaration
export const initialState = {
    count: 0
}
    const countReducer = (state, action ) => {
        switch(action.type) {
            case'INCREASE':
                return {
                    ...state,
                    count: state.count + 1
                }
            case 'DECREASE':
                return{
                    ...state,
                    count: state.count - 1
                }
            default:
                throw Error('Something went wrong!')
        }
    }



export default countReducer;



