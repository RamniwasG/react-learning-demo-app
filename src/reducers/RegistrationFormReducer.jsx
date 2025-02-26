
export const initialState = {
    regsitrationFormData: {}
}

const RegistrationFormReducer = (state, action) => {
    switch(action.type) {
        case 'REGISTRATIONFORMDATA':
            return {
                ...state,
                regsitrationFormData: action.value
            }
            default:
                throw Error('No Result');  
    }

}

export default RegistrationFormReducer;