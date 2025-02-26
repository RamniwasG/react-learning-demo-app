
export const initialState = {
    userInformation: {}
}

const LoginFormCompReducer = (state, action) => {
    switch(action.type) {
        case'USERINFORMATION':
        return {
            ...state,
            userInformation: action.value
        }
        default:
        throw Error('No Result');
    }
}

export default LoginFormCompReducer;