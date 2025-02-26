import { useReducer, useState } from "react";
import LoginFormCompReducer, { initialState } from "./LoginFormCompReducer";

const LoginFormComp = () => {

    const [username, setUsername ] = useState();
    const [password, setPassword ] = useState();
    const [userinfo, dispatch ] = useReducer(LoginFormCompReducer, initialState)

    const handleUsernameChange= (event) => {
        const {value} = event.target
        setUsername(value)
    }

    const handlePasswordChange = (event) => {
        const {value} = event.target
        setPassword(value)
    }

    const onUsernameClickBtn = (event) => {
        event.preventDefault();
        const userinfo = {
            username,
            password
        };
        dispatch({type:'USERINFORMATION', value: userinfo})
    }

    return <div>
        <h3 className="text-center bg-success text-warning mt-3 p-1">Login Form Using by UseReducer</h3>
        <div className="form-group">
            <input type='text' id="username" name="username" className="form-control mb-1" placeholder="Please enter username" onChange={handleUsernameChange}/>
            <input type="password" id="password" name="password" className="form-control mb-1" placeholder="Enter Password" onChange={handlePasswordChange} />
        </div>
        <button type='button' className="btn btn-success text-white w-50" onClick={onUsernameClickBtn}>Submit </button>
        <div className="text-center">
            <h2>{JSON.stringify(userinfo.userInformation)}</h2>
        </div>
    </div>

}

export default LoginFormComp;