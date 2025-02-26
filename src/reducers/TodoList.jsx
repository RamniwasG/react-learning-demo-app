import { useReducer, useState } from "react";
import todoListReducer, { initialState } from "./todoListReducer";

const TodoList = () => {

    const [ todolist, dispatch] = useReducer(todoListReducer, initialState)
    const [username, setUsername] = useState('');

    const handleSaveBtnClick = () => {
        dispatch({ type: 'ADD', value: username })
    }

    const handleRemoveBtnClick = (selectedTodo) => {
        dispatch({ type: 'REMOVE', value: selectedTodo })
    }

    return <div className="container m-4 p-2">
        <h1>Add New Todo</h1>
        <div className="form-group mb-3">
            <label htmlfor="Username" className="mb-1">Username:</label>
            <input type="text" className="form-control design"
                name="username" value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <button type="button" className="btn btn-primary w-100 mb-3"
         onClick={handleSaveBtnClick}>Save</button>

        <h1>Todo List:</h1>
        <ul className="list-group">
            {todolist.todos.map((todo) => {
                return <li key={todo} className="list-group-item d-flex
                 justify-content-between bg-secondary text-white">
                    <span>{todo}</span>
                    <span className="text-warning" onClick={
                        () => handleRemoveBtnClick(todo)}>
                         Remove
                   </span>
                </li>
            })}
        </ul>
    </div>
}

export default TodoList;






// import { useReducer, useState } from "react";
// import todoListReducer, { initialState } from "./todoListReducer";

// const TodoList = () => {

//     const [ todolist, dispatch] = useReducer(todoListReducer, initialState)
//     const [username, setUsername] = useState('');

//     const handleSaveBtnClick = () => {
//         dispatch({ type: 'ADD', value: username })
//     }

//     const handleRemoveBtnClick = (selectedTodo) => {
//         dispatch({ type: 'REMOVE', value: selectedTodo })
//     }

//     return <div className="container m-4 p-2">
//         <h1>Add New Todo</h1>
//         <div className="form-group mb-3">
//             <label htmlfor="Username">Username:</label>
//             <input type="text" className="form-control"
//                 name="username" value={username}
//                 placeholder="Enter your username"
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//         </div>
//         <button type="button" className="btn btn-primary w-100 mb-3" onClick={handleSaveBtnClick}>Save</button>

//         <h1>Todo List</h1>
//         <ul className="list-group">
//             {todolist.todos.map((todo) => {
//                 return <li key={todo} className="list-group-item d-flex justify-content-between">
//                     <span>{todo}</span>
//                     <span className="text-danger" onClick={() => handleRemoveBtnClick(todo)}>Remove</span>
//                 </li>
//             })}
//         </ul>
//     </div>
// }

// export default TodoList;
