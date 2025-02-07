import React, { useState } from "react";

const FormComponant = ({ setFormData, setJsonFormData }) => {


    // const [fName, setFname] = useState('');
    // const [lname, setlName] = useState('');
    // const [user, setUser] = useState('');
    // const [passwored, setPassword ] = useState('');
    
    const [userInfo, setUserInfo] = useState({});

    // const handleFnameChange = (event) => {
    //     const { name, value } = event.target;
    //     setFname(value);
    //     // let o = {}
    //     // o[name] = value;
    //     setUserInfo({
    //         ...userInfo,
    //         [name]: value
    //     })
    // }
    // const handlelnameChange = (event) => {
    //     const { name, value } = event.target;
    //     setlName(value);
    //     // let o = {}
    //     // o[name] = value;
    //     setUserInfo({
    //         ...userInfo,
    //         [name]: value
    //     })
    // }
    // const handleUserChange = (event) => {
    //     const { name, value } = event.target;
    //     setUser(value);
    //     // let o = {}
    //     // o[name] = value;
    //     setUserInfo({
    //         ...userInfo,
    //         [name]: value
    //     })
    // }
    // const handlePassChange = (event) => {
    //     const {name, value} = event.target;
    //     setPassword(value)
    //     // let o = {}
    //     // o[name] = value;
    //     setUserInfo({
            // ...userInfo,
    //         [name]: value
    //     })
    // }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    const onSubmitClick = () => {
        // console.log(JSON.stringify(userInfo))
        setFormData(userInfo.fname, userInfo.lname, userInfo.email, userInfo.password);
        setJsonFormData(userInfo);
    }
    console.log(userInfo)
    return <div>
        <form>
            <div className="form-group">
                <label forHtml="fname">First Name</label>
                <input type="text" name="fname" className="form-control mb-2" placeholder="Enter your first name" onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label forHtml="lname">Last Name</label>
                <input type="text" name="lname" className="form-control mb-2" placeholder="Enter your last name" onChange={handleInputChange}  />
            </div>
            <div className="form-group">
                <label forHtml="user">Email_Id</label>
                <input type="text" name="email" className="form-control mb-2" placeholder="Enter your user name" onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label forHtml="password">Password</label>
                <input type="password" name="password" className="form-control mb-2" placeholder="Enter your password" onChange={handleInputChange} />
            </div>
            <button type="button" onClick={onSubmitClick} className='btn btn-warning text-white d-block mx-auto mb-2 w-50'>Submit</button>

        </form>
    </div>
}
    <div>
    </div>
  

export default FormComponant;