
// initial state declaration
export const initialState = {
    todoName: 'Abc',
    todos: ['Ramniwas', 'Vikash']
};


// reducer function
const todoListReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                // todoName: 'abc',
                // todos: ['a', 'b'],
                todos: [...state.todos, action.value]
            }
        case 'REMOVE':
            return {
                todos: state.todos.filter(todo => todo !== action.value)
            }
        default:
            throw Error('Something went wrong!')
    }
}

export default todoListReducer;



// // initial state declaration
// export const initialState = {
//     // todoName: 'Abc',
//     todos: ['Ramniwas', 'Vikash']
// };

// // reducer function
// const todoListReducer = (state, action) => {
//     switch(action.type) {
//         case 'ADD':
//             return {
//                 // ...state,
//                 // todoName: 'abc',
//                 // todos: ['a', 'b'],
//                 todos: [...state.todos, action.value]
//             }
//         case 'REMOVE':
//             return {
//                 todos: state.todos.filter(todo => todo !== action.value)
//             }
//         default:
//             throw Error('Something went wrong!')
//     }
// }

// export default todoListReducer;



